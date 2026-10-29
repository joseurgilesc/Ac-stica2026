(function () {
  "use strict";

  let audioCtx = null;
  let activeNodes = [];
  let analyser = null;
  let analyserFrame = null;
  let timbreVolume = 0.105;

  async function getAudioCtx() {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) {
      setStatus("Tu navegador no soporta Web Audio API.");
      return null;
    }
    if (!audioCtx) audioCtx = new Ctx();

    if (audioCtx.state === "suspended") {
      try {
        await audioCtx.resume();
      } catch (err) {
        setStatus("El navegador bloqueó el audio. Pulsa nuevamente el botón.");
        return null;
      }
    }
    return audioCtx;
  }

  function setStatus(message) {
    document.querySelectorAll("[data-audio-status]").forEach(function (el) {
      el.textContent = message || "";
    });
  }

  function stopAll() {
    activeNodes.forEach(function (node) {
      try { if (node.stop) node.stop(); } catch (e) {}
      try { if (node.disconnect) node.disconnect(); } catch (e) {}
    });
    activeNodes = [];
  }

  function getAnalyser(ctx) {
    if (!analyser) {
      analyser = ctx.createAnalyser();
      analyser.fftSize = 8192;
      analyser.smoothingTimeConstant = 0.72;
      analyser.minDecibels = -100;
      analyser.maxDecibels = -10;
    }
    return analyser;
  }

  function makeMaster(ctx, duration, useAnalyser, targetVolume) {
    const gain = ctx.createGain();
    const now = ctx.currentTime;
    const level = typeof targetVolume === "number" ? targetVolume : 0.22;

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, level), now + 0.03);
    gain.gain.setValueAtTime(Math.max(0.0001, level), now + Math.max(0.08, duration - 0.08));
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    if (useAnalyser) {
      const a = getAnalyser(ctx);
      try { a.disconnect(); } catch (e) {}
      gain.connect(a);
      a.connect(ctx.destination);
    } else {
      gain.connect(ctx.destination);
    }

    activeNodes.push(gain);
    return gain;
  }

  function startSpectrumDrawing(ctx, a, selector, options) {
    const canvas = document.querySelector(selector);
    if (!canvas) return;

    options = options || {};
    const maxFreq = options.maxFreq || 5000;
    const showFundamental = !!options.showFundamental;
    const fundamentalHz = options.fundamentalHz || 130.81;

    const ratio = window.devicePixelRatio || 1;
    const cssWidth = canvas.clientWidth || 760;
    const cssHeight = 300;

    canvas.width = Math.floor(cssWidth * ratio);
    canvas.height = Math.floor(cssHeight * ratio);

    const g = canvas.getContext("2d");
    g.setTransform(ratio, 0, 0, ratio, 0, 0);

    const data = new Float32Array(a.frequencyBinCount);
    const nyquist = ctx.sampleRate / 2;
    const maxBin = Math.min(data.length - 1, Math.floor((maxFreq / nyquist) * data.length));

    function draw() {
      a.getFloatFrequencyData(data);

      const w = cssWidth;
      const h = cssHeight;
      const padL = 50;
      const padR = 14;
      const padT = 16;
      const padB = 34;
      const plotW = w - padL - padR;
      const plotH = h - padT - padB;

      const styles = getComputedStyle(document.documentElement);
      const fg = styles.getPropertyValue("--md-default-fg-color").trim() || "#222";
      const bg = styles.getPropertyValue("--md-default-bg-color").trim() || "#fff";
      const teal = styles.getPropertyValue("--md-primary-fg-color").trim() || "#249D8F";
      const grid = "rgba(127,127,127,.22)";

      g.clearRect(0, 0, w, h);
      g.fillStyle = bg;
      g.fillRect(0, 0, w, h);

      g.font = "12px system-ui, sans-serif";
      g.textAlign = "center";
      g.textBaseline = "top";

      const ticks = maxFreq <= 5000 ? [0,1000,2000,3000,4000,5000] : [0,1000,2000,4000,6000,8000];
      ticks.forEach(function (freq) {
        if (freq > maxFreq) return;
        const x = padL + (freq / maxFreq) * plotW;
        g.strokeStyle = grid;
        g.lineWidth = 1;
        g.beginPath();
        g.moveTo(x, padT);
        g.lineTo(x, padT + plotH);
        g.stroke();

        g.fillStyle = fg;
        const label = freq === 0 ? "0" : (freq / 1000) + " kHz";
        g.fillText(label, x, padT + plotH + 8);
      });

      g.textAlign = "right";
      g.textBaseline = "middle";
      [-20,-40,-60,-80,-100].forEach(function (db) {
        const y = padT + ((-10 - db) / 90) * plotH;
        g.strokeStyle = grid;
        g.beginPath();
        g.moveTo(padL, y);
        g.lineTo(padL + plotW, y);
        g.stroke();
        g.fillStyle = fg;
        g.fillText(db + " dB", padL - 7, y);
      });

      if (showFundamental) {
        const fx = padL + (fundamentalHz / maxFreq) * plotW;
        g.strokeStyle = "rgba(245,158,11,.85)";
        g.lineWidth = 1.5;
        g.setLineDash([5,4]);
        g.beginPath();
        g.moveTo(fx, padT);
        g.lineTo(fx, padT + plotH);
        g.stroke();
        g.setLineDash([]);
        g.textAlign = "left";
        g.textBaseline = "top";
        g.fillStyle = fg;
        g.fillText("f₀ = 130,8 Hz", Math.min(fx + 5, w - 100), padT + 3);
      }

      g.strokeStyle = teal;
      g.lineWidth = 2;
      g.beginPath();

      for (let i = 0; i <= maxBin; i++) {
        const freq = (i / data.length) * nyquist;
        const x = padL + (freq / maxFreq) * plotW;
        const db = Math.max(-100, Math.min(-10, data[i]));
        const y = padT + ((-10 - db) / 90) * plotH;
        if (i === 0) g.moveTo(x, y);
        else g.lineTo(x, y);
      }
      g.stroke();

      analyserFrame = requestAnimationFrame(draw);
    }

    if (analyserFrame) cancelAnimationFrame(analyserFrame);
    draw();
  }

  function clearSpectrumAfter(duration, selector, message) {
    window.setTimeout(function () {
      if (analyserFrame) {
        cancelAnimationFrame(analyserFrame);
        analyserFrame = null;
      }
      const canvas = document.querySelector(selector);
      if (!canvas) return;

      const g = canvas.getContext("2d");
      const ratio = window.devicePixelRatio || 1;
      g.setTransform(1,0,0,1,0,0);
      g.clearRect(0,0,canvas.width,canvas.height);
      g.setTransform(ratio,0,0,ratio,0,0);

      const styles = getComputedStyle(document.documentElement);
      g.fillStyle = styles.getPropertyValue("--md-default-fg-color").trim() || "#222";
      g.font = "14px system-ui, sans-serif";
      g.textAlign = "center";
      g.fillText(message || "Pulsa un botón para ver el espectro.", (canvas.clientWidth || 760) / 2, 145);
    }, Math.round(duration * 1000) + 120);
  }

  async function playHarmonics(harmonics, baseFreq, duration) {
    const ctx = await getAudioCtx();
    if (!ctx) return;
    stopAll();
    setStatus("Reproduciendo…");

    duration = duration || 1.8;
    baseFreq = baseFreq || 130.81;

    const master = makeMaster(ctx, duration, false);
    const now = ctx.currentTime + 0.02;

    harmonics.forEach(function (n) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(baseFreq * n, now);
      const amp = 0.8 / Math.pow(n, 0.85);
      gain.gain.setValueAtTime(amp / Math.sqrt(harmonics.length), now);
      osc.connect(gain);
      gain.connect(master);
      osc.start(now);
      osc.stop(now + duration);
      activeNodes.push(osc, gain);
    });

    window.setTimeout(function () { setStatus(""); }, Math.round(duration * 1000) + 150);
  }

  async function playOscillator(type, freq, duration) {
    const ctx = await getAudioCtx();
    if (!ctx) return;
    stopAll();
    setStatus("Reproduciendo…");

    duration = duration || 1.5;
    const master = makeMaster(ctx, duration, true, timbreVolume);
    startSpectrumDrawing(ctx, getAnalyser(ctx), "[data-spectrum-canvas]", {
      maxFreq: 5000,
      showFundamental: true,
      fundamentalHz: 130.81
    });

    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq || 130.81, ctx.currentTime);
    osc.connect(master);
    osc.start(ctx.currentTime + 0.02);
    osc.stop(ctx.currentTime + duration);
    activeNodes.push(osc);

    window.setTimeout(function () { setStatus(""); }, Math.round(duration * 1000) + 150);
    clearSpectrumAfter(duration, "[data-spectrum-canvas]", "Pulsa una forma de onda para ver su espectro.");
  }

  function noiseBuffer(ctx, color, duration) {
    const length = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const out = buffer.getChannelData(0);

    let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
    let lastOut = 0;

    for (let i=0; i<length; i++) {
      const white = Math.random() * 2 - 1;

      if (color === "white") {
        out[i] = white * 0.32;
      } else if (color === "pink") {
        b0 = 0.99886*b0 + white*0.0555179;
        b1 = 0.99332*b1 + white*0.0750759;
        b2 = 0.96900*b2 + white*0.1538520;
        b3 = 0.86650*b3 + white*0.3104856;
        b4 = 0.55000*b4 + white*0.5329522;
        b5 = -0.7616*b5 - white*0.0168980;
        out[i] = (b0+b1+b2+b3+b4+b5+b6+white*0.5362)*0.09;
        b6 = white*0.115926;
      } else {
        lastOut = (lastOut + 0.02*white) / 1.02;
        out[i] = lastOut * 2.0;
      }
    }
    return buffer;
  }

  async function playNoise(color, duration) {
    const ctx = await getAudioCtx();
    if (!ctx) return;
    stopAll();
    setStatus("Reproduciendo…");

    duration = duration || 1.8;

    const master = makeMaster(ctx, duration, true, 0.12);
    startSpectrumDrawing(ctx, getAnalyser(ctx), "[data-noise-spectrum-canvas]", {
      maxFreq: 8000,
      showFundamental: false
    });

    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer(ctx, color, duration);
    src.connect(master);
    src.start(ctx.currentTime + 0.02);
    src.stop(ctx.currentTime + duration);
    activeNodes.push(src);

    window.setTimeout(function () { setStatus(""); }, Math.round(duration * 1000) + 150);
    clearSpectrumAfter(duration, "[data-noise-spectrum-canvas]", "Pulsa un color de ruido para ver su espectro.");
  }

  function setFamily(family) {
    const grid = document.querySelector(".harmonic-grid");
    if (!grid) return;

    grid.querySelectorAll(".harmonic-card").forEach(function (card) {
      if (family === "all") card.classList.remove("dimmed");
      else card.classList.toggle("dimmed", !card.classList.contains("family-" + family));
    });

    document.querySelectorAll("[data-harmonic-filter]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-harmonic-filter") === family);
    });
  }

  function handleClick(event) {
    const btn = event.target.closest("button");
    if (!btn) return;

    if (btn.hasAttribute("data-play-harmonics")) {
      const list = btn.getAttribute("data-play-harmonics").split(",").map(Number);
      playHarmonics(list, Number(btn.getAttribute("data-base")) || 130.81, 1.8);
      return;
    }

    if (btn.hasAttribute("data-play-wave")) {
      playOscillator(btn.getAttribute("data-play-wave"), 130.81, 1.5);
      return;
    }

    if (btn.hasAttribute("data-play-noise")) {
      playNoise(btn.getAttribute("data-play-noise"), 1.8);
      return;
    }

    if (btn.hasAttribute("data-harmonic-filter")) {
      setFamily(btn.getAttribute("data-harmonic-filter"));
      return;
    }

    if (btn.hasAttribute("data-play-family")) {
      const family = btn.getAttribute("data-play-family");
      const map = {
        octaves:[1,2,4,8,16],
        fifths:[1,3,6,12],
        thirds:[1,5,10],
        sevenths:[1,7,14]
      };
      if (map[family]) playHarmonics(map[family], 65.41, 1.8);
    }
  }

  document.addEventListener("input", function (event) {
    const slider = event.target.closest("[data-timbre-volume]");
    if (!slider) return;
    const value = Number(slider.value);
    timbreVolume = Math.max(0, Math.min(1, value / 100)) * 0.35;
    const label = document.querySelector("[data-timbre-volume-label]");
    if (label) label.textContent = value + "%";
  });

  if (!window.__session04AudioBound) {
    document.addEventListener("click", handleClick);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopAll();
    });
    window.__session04AudioBound = true;
  }
})();
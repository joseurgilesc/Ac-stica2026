(function () {
  "use strict";

  let audioCtx = null;
  let activeNodes = [];

  async function getAudioCtx() {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) {
      setStatus("Tu navegador no soporta Web Audio API.");
      return null;
    }

    if (!audioCtx) {
      audioCtx = new Ctx();
    }

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

  function makeMaster(ctx, duration) {
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.22, now + 0.03);
    gain.gain.setValueAtTime(0.22, now + Math.max(0.08, duration - 0.08));
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    gain.connect(ctx.destination);
    activeNodes.push(gain);
    return gain;
  }

  async function playHarmonics(harmonics, baseFreq, duration) {
    const ctx = await getAudioCtx();
    if (!ctx) return;

    stopAll();
    setStatus("Reproduciendo…");

    duration = duration || 1.8;
    baseFreq = baseFreq || 130.81;

    const master = makeMaster(ctx, duration);
    const now = ctx.currentTime + 0.02;

    harmonics.forEach(function (n) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(baseFreq * n, now);

      // Mantiene el nivel general controlado cuando se suman muchos armónicos.
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

    const master = makeMaster(ctx, duration);
    const osc = ctx.createOscillator();

    osc.type = type;
    osc.frequency.setValueAtTime(freq || 130.81, ctx.currentTime);
    osc.connect(master);

    osc.start(ctx.currentTime + 0.02);
    osc.stop(ctx.currentTime + duration);

    activeNodes.push(osc);

    window.setTimeout(function () { setStatus(""); }, Math.round(duration * 1000) + 150);
  }

  function noiseBuffer(ctx, color, duration) {
    const length = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const out = buffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    let lastOut = 0;

    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;

      if (color === "white") {
        out[i] = white * 0.32;
      } else if (color === "pink") {
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        out[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.09;
        b6 = white * 0.115926;
      } else {
        lastOut = (lastOut + 0.02 * white) / 1.02;
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

    const master = makeMaster(ctx, duration);
    const src = ctx.createBufferSource();

    src.buffer = noiseBuffer(ctx, color, duration);
    src.connect(master);

    src.start(ctx.currentTime + 0.02);
    src.stop(ctx.currentTime + duration);

    activeNodes.push(src);

    window.setTimeout(function () { setStatus(""); }, Math.round(duration * 1000) + 150);
  }

  function setFamily(family) {
    const grid = document.querySelector(".harmonic-grid");
    if (!grid) return;

    grid.querySelectorAll(".harmonic-card").forEach(function (card) {
      if (family === "all") {
        card.classList.remove("dimmed");
      } else {
        card.classList.toggle("dimmed", !card.classList.contains("family-" + family));
      }
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
        octaves: [1, 2, 4, 8, 16],
        fifths: [1, 3, 6, 12],
        thirds: [1, 5, 10],
        sevenths: [1, 7, 14]
      };
      if (map[family]) playHarmonics(map[family], 65.41, 1.8);
    }
  }

  if (!window.__session04AudioBound) {
    document.addEventListener("click", handleClick);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopAll();
    });
    window.__session04AudioBound = true;
  }
})();
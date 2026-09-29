(function () {
  "use strict";

  let audioCtx = null;
  let activeNodes = [];

  function getAudioCtx() {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }

  function stopAll() {
    activeNodes.forEach(function (node) {
      try { if (node.stop) node.stop(); } catch (e) {}
      try { if (node.disconnect) node.disconnect(); } catch (e) {}
    });
    activeNodes = [];
  }

  function masterEnvelope(ctx, duration) {
    const gain = ctx.createGain();
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.28, now + 0.03);
    gain.gain.setValueAtTime(0.28, now + Math.max(0.04, duration - 0.08));
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    gain.connect(ctx.destination);
    activeNodes.push(gain);
    return gain;
  }

  function playHarmonics(harmonics, baseFreq, duration) {
    const ctx = getAudioCtx();
    if (!ctx) return;
    stopAll();
    duration = duration || 1.8;
    baseFreq = baseFreq || 130.81;
    const master = masterEnvelope(ctx, duration);
    const now = ctx.currentTime;

    harmonics.forEach(function (n) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(baseFreq * n, now);
      gain.gain.setValueAtTime(1 / Math.pow(n, 0.78), now);
      osc.connect(gain);
      gain.connect(master);
      osc.start(now);
      osc.stop(now + duration + 0.02);
      activeNodes.push(osc, gain);
    });
  }

  function playOscillator(type, freq, duration) {
    const ctx = getAudioCtx();
    if (!ctx) return;
    stopAll();
    duration = duration || 1.5;
    const master = masterEnvelope(ctx, duration);
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.value = freq || 130.81;
    osc.connect(master);
    osc.start();
    osc.stop(ctx.currentTime + duration + 0.02);
    activeNodes.push(osc);
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
        out[i] = white * 0.45;
      } else if (color === "pink") {
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        out[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      } else {
        lastOut = (lastOut + 0.02 * white) / 1.02;
        out[i] = lastOut * 2.7;
      }
    }
    return buffer;
  }

  function playNoise(color, duration) {
    const ctx = getAudioCtx();
    if (!ctx) return;
    stopAll();
    duration = duration || 1.8;
    const master = masterEnvelope(ctx, duration);
    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer(ctx, color, duration);
    src.connect(master);
    src.start();
    src.stop(ctx.currentTime + duration + 0.02);
    activeNodes.push(src);
  }

  function setFamily(family) {
    const grid = document.querySelector(".harmonic-grid");
    if (!grid) return;
    const cards = grid.querySelectorAll(".harmonic-card");
    cards.forEach(function (card) {
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

  function init() {
    if (!document.querySelector("[data-session04-audio]")) return;

    document.querySelectorAll("[data-play-harmonics]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const list = btn.getAttribute("data-play-harmonics").split(",").map(Number);
        playHarmonics(list, Number(btn.getAttribute("data-base")) || 130.81, 1.8);
      });
    });

    document.querySelectorAll("[data-play-wave]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        playOscillator(btn.getAttribute("data-play-wave"), 130.81, 1.5);
      });
    });

    document.querySelectorAll("[data-play-noise]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        playNoise(btn.getAttribute("data-play-noise"), 1.8);
      });
    });

    document.querySelectorAll("[data-harmonic-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setFamily(btn.getAttribute("data-harmonic-filter"));
      });
    });

    document.querySelectorAll("[data-play-family]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const family = btn.getAttribute("data-play-family");
        const map = {
          octaves: [1, 2, 4, 8, 16],
          fifths: [1, 3, 6, 12],
          thirds: [1, 5, 10],
          sevenths: [1, 7, 14]
        };
        if (map[family]) playHarmonics(map[family], 65.41, 1.8);
      });
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopAll();
    });
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
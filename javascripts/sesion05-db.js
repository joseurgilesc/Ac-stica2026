(function(){
  "use strict";

  let ctx = null;
  let active = [];

  async function getCtx(){
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if(!Ctx) return null;
    if(!ctx) ctx = new Ctx();
    if(ctx.state === "suspended"){
      try{ await ctx.resume(); }catch(e){ return null; }
    }
    return ctx;
  }

  function stopAll(){
    active.forEach(function(n){
      try{ if(n.stop) n.stop(); }catch(e){}
      try{ if(n.disconnect) n.disconnect(); }catch(e){}
    });
    active = [];
  }

  async function playDb(db){
    const c = await getCtx();
    if(!c) return;
    stopAll();

    const osc = c.createOscillator();
    const gain = c.createGain();
    const master = c.createGain();

    osc.type = "sine";
    osc.frequency.value = 440;

    const linear = Math.pow(10, db/20);
    const safeBase = 0.12;
    gain.gain.value = linear;
    master.gain.value = safeBase;

    osc.connect(gain);
    gain.connect(master);
    master.connect(c.destination);

    const now = c.currentTime;
    osc.start(now);
    osc.stop(now + 1.2);

    active.push(osc,gain,master);

    const label = document.querySelector("[data-db-demo-readout]");
    if(label){
      label.textContent = db === 0 ? "0 dB (referencia)" : db + " dB";
    }

    document.querySelectorAll("[data-db-demo]").forEach(function(btn){
      btn.classList.toggle("active", Number(btn.getAttribute("data-db-demo")) === db);
    });
  }

  document.addEventListener("click", function(ev){
    const btn = ev.target.closest("[data-db-demo]");
    if(!btn) return;
    playDb(Number(btn.getAttribute("data-db-demo")));
  });
})();
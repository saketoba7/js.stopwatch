'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
  
  timer.textContent = `${m}:${s}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 100);
  }

  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
  });
  
  stop.addEventListener('click', () => {
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
  });

  reset.addEventListener('click', () => {
    timer.textContent = '00:00';
    elapsedTime = 0;
  });
}
let start = document.querySelector('.start');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let settings = document.querySelector('.settings');
let ring = document.querySelector('.ring');

let sayAlert = () => {
  alert('Time is over!');
};

start.addEventListener('click', () => {
  if (start.textContent === 'start') {
    start.textContent = 'stop';

    let timerTime = parseInt(minutes.value) * 60 + parseInt(seconds.value);

    let timer = setInterval(() => {
      if (timerTime <= 0) {
        clearInterval(timer);
        ring.classList.add('ending');
        seconds.value = 0;
        setTimeout(sayAlert, 100);
      }
      else {
        let lastMinutes = Math.trunc(timerTime / 60);
        let lastSeconds = timerTime - lastMinutes;
        minutes.value = lastMinutes;
        seconds.value = lastSeconds;
      }
      --timerTime;
    });
  } else {
    start.textContent = 'start';
  }

  if (start.textContent === 'stop') {
    minutes.disabled = true;
    seconds.disabled = true;
    settings.disabled = true;
  }

});

settings.addEventListener('click', () => {
    if (minutes.disabled === true) {
      minutes.disabled = false;
      seconds.disabled = false;
    }
    else {
      minutes.disabled = true;
      seconds.disabled = true;
    }
});

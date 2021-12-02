let start = document.querySelector('.start');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let settings = document.querySelector('.settings');
let ring = document.querySelector('.ring');

let sayAlert = () => {
  alert('Time is over!');
};

let fullTime = parseInt(minutes.value)*60 + parseInt(seconds.value);

// Timer function--------------------------------------------------

let timer = () => {
  let lastMinutes = Math.trunc(fullTime / 60);
  let lastSeconds = fullTime - lastMinutes * 60;

  if (lastMinutes < 10) {
    minutes.value = '0' + lastMinutes;
  } else {
      minutes.value = lastMinutes;
    }

  if (lastSeconds < 10) {
    seconds.value = '0' + lastSeconds;
  } else {
      seconds.value = lastSeconds;
    }

  --fullTime;
};

// Handlers ---------------------------------------------------------

start.addEventListener('click', () => {
  if (start.textContent === 'start') {
    start.textContent = 'stop';
  }
  else {
    start.textContent = 'start';
  }
  let counter = setInterval(() => {
    if (fullTime <= 0) {
      clearInterval(counter);
      setTimeout(sayAlert, 100);
      seconds.value = '00';
      ring.classList.add('ending');
    } else if (start.textContent === 'start') {
        clearInterval(counter);
      } else if (start.textContent !== 'start' || fullTime > 0) {
          timer();
        }
  }, 1000);
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

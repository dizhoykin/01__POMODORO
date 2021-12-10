let startBtn = document.querySelector('.start');
let settingsBtn = document.querySelector('.settings');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let ring = document.querySelector('.ring');

let counter;
let initialMinutes = minutes.value;
let initialSeconds = seconds.value;

// StartBtn Content Setter ----------------------------------------------

const setStartBtnContent = (content) => {
  startBtn.innerHTML = content;
};

// Alert Function -------------------------------------------------------

const sayAlert = () => {
  alert('Time is over!');
};

// Full Time Getter -----------------------------------------------------

const getFullTime = (minutesValue, secondsValue) => {
  return fullTime = parseInt(minutesValue) * 60 + parseInt(secondsValue);
};

getFullTime(initialMinutes, initialSeconds);

// Input Status setInterval

const setInputStatus = (status) => {
  minutes.disabled = !status;
  seconds.disabled = !status;
};

// Start Button Handler -------------------------------------------------

startBtn.addEventListener('click', () => {
  switch (startBtn.innerHTML) {
    case 'start':
      setStartBtnContent('stop');
      timer();
      break;
    case 'stop':
      clearInterval(counter);
      setStartBtnContent('clear');
      break;
    case 'confirm':
      setStartBtnContent('start');
      initialMinutes = minutes.value;
      initialSeconds = seconds.value;
      getFullTime(initialMinutes, initialSeconds);
      setInputStatus(false);
      break;
    case 'clear':
      ring.classList.remove('ending');
      setStartBtnContent('start');
      minutes.value = initialMinutes;
      seconds.value = initialSeconds;
      getFullTime(initialMinutes, initialSeconds);
      break;
    default:
      setStartBtnContent('start');
  }
});

// Settings Button Handler --------------------------------------------

settingsBtn.addEventListener('click', () => {
  setStartBtnContent('confirm');
  setInputStatus(true);
});

// Timer Function -------- --------------------------------------------

let timer = () => {
  counter = setInterval(() => {
    let lastMinutes = Math.trunc(fullTime / 60);
    let lastSeconds = fullTime - lastMinutes * 60;
    minutes.value = lastMinutes < 10 ? '0' + lastMinutes : lastMinutes;
    seconds.value = lastSeconds < 10 ? '0' + lastSeconds : lastSeconds;
    fullTime--;
    if (fullTime < 0) {
      ring.classList.add('ending');
      setStartBtnContent('clear');
      clearInterval(counter);
      setTimeout(sayAlert, 100);
    }
  }, 1000);
};

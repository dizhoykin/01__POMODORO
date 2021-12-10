let startBtn = document.querySelector('.start');
let settingsBtn = document.querySelector('.settings');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let ring = document.querySelector('.ring');

let initialMinutes = minutes.value;
let initialSeconds = seconds.value;
let counter;

let fullTime = parseInt(minutes.value)*60 + parseInt(seconds.value);

// Alert function -------------------------------------------------

let sayAlert = () => {
  alert('Time is over!');
};

// SettingsBtn Handler ------------------------------------------------

settings.addEventListener('click', () => {
  start.value = "stop";
  minutes.disabled = "false";
  seconds.disabled = "false";
});

// StartBtn Handler

startBtn.addEventListener("click", () => {
  switch (startBtn.value) {
    case: "start":
      startBtn.value = "stop";
      timer();
      return;
    case: "stop":
      startBtn.value = "stop";
      clearInterval(counter);
      return;
  }
});

// Timer function--------------------------------------------------

let timer = () => {
  let counter = setInterval(() => {
    let lastMinutes = Math.trunc(fullTime / 60);
    let lastSeconds = fullTime - lastMinutes * 60;

    minutes.value = lastMinutes < 0 ? '0' + lastMinutes : lastMinutes;
    seconds.value = lastSeconds < 0 ? '0' + lastSeconds : lastSeconds;

    fullTime--;

    if (fullTime < 0) {
      ring.classList.add("ending");
      startBtn.value = "end";
      clearInterval(counter);
      setTimeout(() => sayAlert, 100);
    }
  }, 1000);
};

const timerElement = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

let countdownDuration = 30 * 24 * 60 * 60;

const loadCountdown = () => {
  const savedCountdown = localStorage.getItem("countdown");
  if (savedCountdown) {
    const savedTime = parseInt(savedCountdown, 10);
    const now = Math.floor(Date.now() / 1000);
    countdownDuration = Math.max(countdownDuration - (now - savedTime), 0);
  }
};

const saveCountdown = () => {
  const now = Math.floor(Date.now() / 1000);
  localStorage.setItem(
    "countdown",
    now - (30 * 24 * 60 * 60 - countdownDuration)
  );
};

const updateTimer = () => {
  let days = Math.floor(countdownDuration / (24 * 60 * 60));
  let hours = Math.floor((countdownDuration % (24 * 60 * 60)) / (60 * 60));
  let minutes = Math.floor((countdownDuration % (60 * 60)) / 60);
  let seconds = Math.floor(countdownDuration % 60);

  timerElement.days.textContent = String(days).padStart(2, "0");
  timerElement.hours.textContent = String(hours).padStart(2, "0");
  timerElement.minutes.textContent = String(minutes).padStart(2, "0");
  timerElement.seconds.textContent = String(seconds).padStart(2, "0");

  if (countdownDuration > 0) {
    countdownDuration--;
    saveCountdown();
  } else {
    clearInterval(timerInterval);
  }
};

loadCountdown();
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

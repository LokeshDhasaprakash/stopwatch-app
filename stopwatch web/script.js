let startTime;
let elapsedTime = 0;
let timerInterval;

function displayTime(time) {
  const display = document.querySelector('.display');
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  display.textContent = ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')};
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    displayTime(elapsedTime);
  }, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  displayTime(elapsedTime);
  document.querySelector('.laps').innerHTML = '';
}

function lapTimer() {
  const lapsList = document.querySelector('.laps');
  const lapTime = elapsedTime;
  const lapItem = document.createElement('li');
  lapItem.textContent = display.textContent;
  lapsList.appendChild(lapItem);
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.pause').addEventListener('click', pauseTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.lap').addEventListener('click', lapTimer);
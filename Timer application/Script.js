let timerInterval;
let elapsedTime = 0; // Time in seconds

const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

// Function to format time into MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Start the timer
function startTimer() {
    if (!timerInterval) { // Only start if not already running
        timerInterval = setInterval(() => {
            elapsedTime++;
            timerDisplay.textContent = formatTime(elapsedTime);
        }, 1000);
    }
}

// Stop the timer
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // Reset the interval to allow restart
}

// Reset the timer
function resetTimer() {
    stopTimer(); // Stop the timer if it's running
    elapsedTime = 0; // Reset elapsed time
    timerDisplay.textContent = formatTime(elapsedTime); // Update display
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

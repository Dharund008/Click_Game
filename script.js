const boundary = document.getElementById('boundary');
const block = document.getElementById('block');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
let score = 0;
let timeLeft = 60;

function getRandomPosition() {
    const maxX = boundary.clientWidth - block.clientWidth;
    const maxY = boundary.clientHeight - block.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
}

function updateBlock() {
    const position = getRandomPosition();
    block.style.left = `${position.x}px`;
    block.style.top = `${position.y}px`;
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function updateTimer() {
    timerElement.textContent = `Time: ${timeLeft}`;
}

function startGame() {
    updateBlock();
    updateScore();
    updateTimer();

    block.addEventListener('click', () => {
        score++;
        updateScore();
        updateBlock();
    });

    const timerInterval = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert(`Game over! Your final score is ${score}`);
            resetGame();
        } else {
            updateTimer();
        }
    }, 1000);
}

function resetGame() {
    score = 0;
    timeLeft = 60;
    startGame();
}

// Start the game
startGame();

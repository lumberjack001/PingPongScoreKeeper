const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

let p1score = 0;
let p2score = 0;
let winningScore = 3;
let gameOver = false;


p1Button.addEventListener('click', () => {

    if (!gameOver) {
        p1score += 1;
        if (p1score === winningScore) {
            gameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1score;
    }

});
p2Button.addEventListener('click', () => {

    if (!gameOver) {
        p2score += 1;
        if (p2score === winningScore) {
            gameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        };
        p2Display.textContent = p2score;
    }

});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

let reset = () => {
    p1score = 0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    gameOver = false;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-danger', 'has-text-success');
    p1Button.disabled = false;
    p2Button.disabled = false;
};
resetButton.addEventListener('click', reset)
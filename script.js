const result = document.getElementById("output");
const option = ['stone', 'paper', 'scissor'];
const computerChoiceImg = document.getElementById("computer-choice");
const userChoiceImg = document.getElementById("user-choice");
const winCountElem = document.getElementById("win-count");
const loseCountElem = document.getElementById("lose-count");

function computeRandom() {
    const random = Math.floor(Math.random() * 3);
    return option[random];
}

let winCount = 0;
let loseCount = 0;

function checkResult(choice, computeChoice) {
    if (choice === computeChoice) return `It is a tie boiyyyyy`;
    else if (
        (choice === 'stone' && computeChoice === 'scissor') ||
        (choice === 'paper' && computeChoice === 'stone') ||
        (choice === 'scissor' && computeChoice === 'paper')
    ) {
        winCount += 1;
        winCountElem.textContent = winCount;
        return `You Won ma brotha`;
    }
    loseCount += 1;
    loseCountElem.textContent = loseCount;
    return `I was BORN to be KINGGGGGGG`;
}

function user(event) {
    const choice = event.target.id;
    const computeChoice = computeRandom();

    computerChoiceImg.innerHTML = `<img src='assets/${computeChoice}.png' alt='Image' class='choice-img'>`;
    userChoiceImg.innerHTML = `<img src='assets/${choice}.png' alt='Image' class='choice-img'>`;
    const resultMessage = checkResult(choice, computeChoice);
    result.textContent = resultMessage;
}

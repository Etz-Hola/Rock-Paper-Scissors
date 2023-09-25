const choice = document.querySelectorAll('.choice');
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");


const scoreBoard = {player:0, computer: 0}

const play = (e) => {
    // console.log(e.target.id);
    restart.style.display = "inline-block";
    const playChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playChoice, computerChoice);
    showWinner(winner,computerChoice)
    // console.log(getWinner);
    console.log(playChoice, computerChoice);
};

const getComputerChoice = () => {
    const rand = Math.random()
    if(rand < 0.34) {
        return "rock"
    } else if(rand <= 0.67) {
        return "paper"
    } else {
        return "scissors"
    }

}

//Get Game Winner
const getWinner = (p, c) => {
    if(p === c) {
        return "draw";
    } else if(p === "rock") {
        if (c === "paper") {
            return "computer";
        } else {
            return "player";
        }
    } else if(p === "paper") {
        if (c === "scissors") {
            return "computer";
        } else {
            return "player";
        }
    } else if(p === "scissors") {
        if (c === "rock") {
            return "computer";
        } else {
            return "player";
        }
    }
}

const showWinner = (winner, computerChoice) => {
    if(winner === "player") {
          //increase by score
    scoreBoard.player++

    //show modal result
    result.innerHTML = `
    <h1 class="text-win">You Win</h1>
    <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
    <p>computer chose <strong>${computerChoice}</strong></p>
    `
    } else if(winner === "computer") {
        //increase by score
        scoreBoard.computer++

        //show modalresult

        result.innerHTML = `
        <h1 class="text-win">You Lose</h1>
        <i id="paper" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        <p>computer chose <strong>${computerChoice}</strong></p>
        `
    } else{
        result.innerHTML = `
        <h1>its a draw</h1>
        <i id="scissors" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        <p>computer chose <strong>${computerChoice}</strong></p>
        `
    }

    score.innerHTML = `
    <p>player: ${scoreBoard.player}</p>
    <p>computer: ${scoreBoard.computer}</p>
`
  modal.style.display = "block"
}

const restartGame = () => {
    scoreBoard.player = 0
    scoreBoard.computer = 0
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `
}

const clearModal = (e) => {
    if(e.target == modal) {
        modal.style.display = "none"
    }
}

// Event listeners
choice.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearModal)
restart.addEventListener("click", restartGame)

// console.log(Math.random());
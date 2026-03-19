let personMove;
let computerMove;

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function getComputerMove() {
  let computerMove;
  let randomNumber = Math.floor(1 + Math.random() * 3);
  // console.log(randomNumber);
  if (randomNumber === 1) {
    computerMove = "rock";
  } else if (randomNumber === 2) {
    computerMove = "paper";
  } else if (randomNumber === 3) {
    computerMove = "scissors";
  }
  return computerMove;
}

function playGame(computerMove, personMove) {
  if (computerMove === "rock" && personMove === "scissors") {
    //computer wins
    score.losses += 1;
    alert(
      `You picked ${personMove}. Computer picked ${computerMove}. You lose!
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
    );
  } else if (computerMove === "paper" && personMove === "rock") {
    score.losses += 1;
    //computer wins
    alert(
      `You picked ${personMove}. Computer picked ${computerMove}. You lose!
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
    );
  } else if (computerMove === "scissors" && personMove === "paper") {
    score.losses += 1;
    //computer wins
    alert(
      `You picked ${personMove}. Computer picked ${computerMove}. You lose!
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
    );
  } else if (computerMove === "scissors" && personMove === "rock") {
    score.wins += 1;
    //person wins
    alert(
      `You picked ${personMove}. Computer picked ${computerMove}. You Won!
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
    );
  } else if (computerMove === "rock" && personMove === "paper") {
    score.wins += 1;
    //person wins
    alert(
      `You picked ${personMove}. Computer picked ${computerMove}. You Won!
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
    );
  } else if (computerMove === "paper" && personMove === "scissors") {
    score.wins += 1;
    //person wins
    alert(
      `You picked ${personMove}. Computer picked ${computerMove}. You Won!
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
);
  } else if (
    (computerMove === "rock" && personMove === "rock") ||
    (computerMove === "paper" && personMove === "paper") ||
    (computerMove === "scissors" && personMove === "scissors")
  ) {
    score.ties += 1;
    //Tie
    alert(
      `You picked ${personMove}. Computer picked ${computerMove}. Match Ties!
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
    );
  }
  localStorage.setItem('score',JSON.stringify(score));
  return;
}
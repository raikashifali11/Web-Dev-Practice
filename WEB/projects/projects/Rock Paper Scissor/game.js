let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
let userScorePara = document.querySelector('#user-score');
let compScorePara = document.querySelector('#comp-score');

const genCompChoice = ()=>{
    const options = ['rock','paper','scissors'];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}
const playGame = (userChoice) =>{
    console.log('user choice =',userChoice);
    //computer choice
    const compChoice = genCompChoice();
    console.log('comp choice =',compChoice);
    if(userChoice == compChoice){
        msg.innerText = 'Game was draw';
        msg.style.backgroundColor = '#081b31';
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            //paper,scissors
            userWin = compChoice === 'paper'? false: true;
        }
        else if(userChoice === 'paper'){
            //rock,scissors
            userWin = compChoice === 'rock'? true: false;
        }
        else{
            //rock,paper
            userWin = compChoice === 'paper'? true: false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice) =>{ 
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

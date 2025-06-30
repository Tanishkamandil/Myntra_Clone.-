let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "scissors","paper"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};
const drawGame = (userChoice , compChoice) => {
    msg.innerText=`Ooops!  ${userChoice} = ${compChoice} Game Was Draw`;
    msg.style.backgroundColor = "purple";
};

const showWinner = (userWin , userChoice, compChoice) => {
if (userWin) {
    userScore++;
 msg.innerText=`You Win! Your ${compChoice} beats ${userChoice}`;
 msg.style.backgroundColor = "green";
 userScorePara.innerText = userScore;

}else{
    msg.innerText=`You lose ! ${compChoice} beats your ${userChoice}`;;
    msg.style.backgroundColor = "red";
    compScorePara.innerText= compScore;
     compScore++;
}
}

const playGame = (userChoice) => {
    console.log("userchoice = ",  userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("comp choice = " , compChoice);

    if ( userChoice === compChoice){
   drawGame(userChoice, compChoice);
    } else {
        let userWin= true;
        if(userChoice==="rock"){
            //scissor , paper
            userWin =  compChoice === "paper"? false:true ;
        }
        else if(userChoice==="paper"){
            //scissor , rock
            userWin =  compChoice === "scissor"? false:true ;
        }
        else {
            //rock , paper
            userWin =  compChoice === "rock"? false : true ;
        }
        showWinner(userWin , compChoice, userChoice);
    }

    };


choices.forEach((choice )=> {
    choice.addEventListener("click", ()=> {
       const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
});
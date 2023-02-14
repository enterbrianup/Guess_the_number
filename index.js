let computerGuess;
let userGuess = [];
let userNumberUpdate = document.getElementById("textOutput");
let userGuessUpdate = document.getElementById("inputBox");
let audio = new Audio("./audio/bell_achievment.wav");

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    // console.log(computerGuess);
    document.getElementById("newgamebutton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};
// reloading the page here
const newgamebegin = () => {
    audio.play();
    window.location.reload();
}

const startGame = () => {
    
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
};

const easymode = () => {
    audio.play();
    maxGuess=10;
    startGame();
    
};
const hardmode = () => {
    audio.play();
    maxGuess=5;
    startGame();
    
};
//main logic of the problem
const compareGuess = ()  =>

{
    const userNumber = Number(document.getElementById("inputBox").value);
     userGuess = [...userGuess, userNumber];
    document.getElementById("Guesses").innerHTML = userGuess;
    audio.play();
//check the value low or high

 if(userGuess.length < maxGuess){
if(userNumber>computerGuess){
   userNumberUpdate.innerHTML=" your guess is High";
    userGuessUpdate.value="";
}
else if( userNumber<computerGuess){
    userNumberUpdate.innerHTML="your guess is low";
    userGuessUpdate.value="";
}
else{
    userNumberUpdate.innerHTML = " Congratulations 🎊 ";
    userNumberUpdate.value="";
    startnewGame();
}
    }
    else {
        if (userNumber > computerGuess) {
        userNumberUpdate.innerHTML = `Better luck next Time!!! The correct number was ${computerGuess}`;
        userGuessUpdate.value = "";
            audio.play();
            startnewGame();
           
    }
    else if (userNumber < computerGuess) {
            userNumberUpdate.innerHTML = `Better luck next Time!!! The correct number was${computerGuess}`;
        userGuessUpdate.value = "";
            startnewGame();
    }
    else {
        userNumberUpdate.innerHTML = " Congratulations 🎊 ";
        userNumberUpdate.value = "";
            startnewGame();
            audio.play();
    }
}
document.getElementById("attempts").innerHTML=userGuess.length;
};

// disabled to enter more number and showing new game button inline
const startnewGame = () =>{
    document.getElementById("newgamebutton").style.display = "inline";
    userGuessUpdate.setAttribute('disabled',true);
}


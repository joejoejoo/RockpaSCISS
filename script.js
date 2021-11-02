function fmain1() {
  game("rock");
}

function fmain2() {
  game("paper");
}

function fmain3() {
  game("scissors");
}

function computerPlay() {
  let computerRand = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  // I had this statement here. But what would happen is that everytime the computer generated its random choice
  // it would create a new image elemment. But each time the function was called, it would create another image element
  // after a number of calls, it would result in multiple images being displayed.
  // when my perfered behavior, was to just have the computers choice image show up for that round. And when another round
  // was processed the new computer choice image would replace the previous. to fix it I moved the following statement, to a
  // global scope. This made it so only on new image was created, and each time this function would run, it would replace the
  // picture by just changing the source of the img.

  //***const image = document.createElement("img");***

  if (computerRand === 1) {
    computerChoice = "Rock";
    image.src = "pictures/therock1.jpeg";
  } else if (computerRand === 2) {
    computerChoice = "Paper";
    image.src = "pictures/paper2.jpeg";
  } else if (computerRand === 3) {
    computerChoice = "Scissors";
    image.src = "pictures/ed-sc2.jpeg";
  }

  hidetext.classList.remove("hide");
  document.querySelector(".computerSelection").appendChild(image);
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  let WinOrLose = "sub";
  //rock > scissors
  //paper > rock
  //scissors > paper
  //anything else is draw

  //We will use playerChoice and compare it to computerChoices
  // and create a series of nested branches.

  if (playerChoice == "rock") {
    if (computerChoice == "Rock") {
      WinOrLose = "The game is a draw";
    } else if (computerChoice == "Paper") {
      WinOrLose = "Paper Beats Rock, You lose, sorry loser.";
      cpuScore++;
    } else if (computerChoice == "Scissors") {
      WinOrLose = "Rock Beats Scissors, You WIN!!!";
      playerScore++;
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "Rock") {
      WinOrLose = "Paper Beats Rock, You WIN!!";
      playerScore++;
    } else if (computerChoice == "Paper") {
      WinOrLose = "The Game is a Draw";
    } else if (computerChoice == "Scissors") {
      WinOrLose = "Scissors cut Paper, You lose, sorry loser.";
      cpuScore++;
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "Rock") {
      WinOrLose = "Rock Beats Paper, You lose, sorry loser";
      cpuScore++;
    } else if (computerChoice == "Paper") {
      WinOrLose = "Scissors beats Paper, You WIN!!";
      playerScore++;
    } else if (computerChoice == "Scissors") {
      WinOrLose = "This Round is a draw";
    }
  }
  // test point: console.log(WinOrLose);
  //test point: console.log(WinOrLose);

  return WinOrLose;
}

function game(clickchoice) {
  //This call is to make sure if numbers are randomizing correctly.
  //test point: console.log(computerPlay());

  //this is where we start
  //let playerChoice = "Rock"; //bug i had here. I had spelled "rock", which was not equal to what i had wrote in the function.

  //let userInput = prompt("Rock, Paper, Scissors?");
  //let playerChoice = userInput.toLowerCase();
  let computerChoice = computerPlay();

  let gameOutCome = playRound(clickchoice, computerChoice);

  //test point: console.log(gameOutCome);

  document.querySelector(".currentOut").textContent = gameOutCome;

  console.log(
    `The player choice was ${clickchoice} and CPU was ${computerChoice}. ${gameOutCome}`
  );
  console.log(
    "The current score is, Player score: " +
      playerScore +
      " CPU Score: " +
      cpuScore +
      " "
  );

  //to do case-insentive we do something like str1.toLowerCase() === str2.toLowerCase();

  //This will check if score has gotten to 5. Then the winner will be declared.

  //This is how we update our score area
  plascore.textContent = "Player: " + playerScore;
  comscore.textContent = "Computer: " + cpuScore;

  if (playerScore >= 5 || cpuScore >= 5) {
    console.log(
      `The end game score is Player: ${playerScore} CPU: ${cpuScore}`
    );

    //we will hide the current round info to make way for final score output.
    document.querySelector(".currentOut").classList.add("hide");
    //when game is over we print out the final score
    finalScore.textContent =
      "The end game score is Player: " + playerScore + " CPU: " + cpuScore;

    if (playerScore > cpuScore) {
      console.log("YOU WIN!!!");

      //we print out if they won or lost
      WinLose.textContent = "YOU WIN!!!";
    } else if (playerScore === cpuScore) {
      console.log("THE GAME IS A TIE!!!");
    } else {
      console.log("Better luck next time, loser.");
      //we print out if they won or loss
      WinLose.textContent = "Better luck next time, loser.";
    }

    //since game went over 5 rounds, game is over and the buttons will be disabled
    document.getElementById("rockBut").disabled = true;
    document.getElementById("paperBut").disabled = true;
    document.getElementById("sciBut").disabled = true;
  }
}

let hidetext = document.querySelector(".turnOffText");

//global Variables needed to get track of score
let playerScore = 0;
let cpuScore = 0;

// wiill create an image by DOM, and insert what the computers randomly generated choice was an in image.
const image = document.createElement("img");

//will keep track of Scores in Score area and update via DOM
const plascore = document.querySelector(".plaSco");
const comscore = document.querySelector(".comSco");

//This will Dom out the final score when game is over.
const finalScore = document.querySelector(".finScore");
const WinLose = document.querySelector(".youWL");

//MUTHA FuckAAAAHHH!!!!!!!. I SUCK. SPENT a whole day wondeing why my program was trigering my function with out clicking;
//In the evenListener i had fmain1(), instead of fmain1. So I would pass the function call, and it would always call the function
//When we pass teh name function name that meanss that when we click it, the reference will be triggered.
//WTF MATE. 1 day for a stupid mistake. I need adderall for this sshit.
var button1 = document.querySelector("#rockBut");
button1.addEventListener("click", fmain1);

/*const button1 = document.querySelector("#rockBut");
button1.addEventListener("click", () => {
  console.log("Hello rock");
});
*/

var button2 = document.querySelector("#paperBut");
button2.addEventListener("click", fmain2);

var button3 = document.querySelector("#sciBut");
button3.addEventListener("click", fmain3);

const sizzorsBth = document.getElementById("sizzors");
const rockBth = document.getElementById("rock");
const papperBth = document.getElementById("papper");
const dispayPlayear = document.getElementById("display-player");
const dispayComputer = document.getElementById("dispay-computer");
const scorePlayear = document.getElementById("score-playear");
const scoreComputer = document.getElementById("score-computer");

let playerChoise = ["✌", "✊", "🤚"];

//poäng räknare med hjälp av for loop

/* for (const i = 0; i <= 5; i++) {
  //sätta in argument

  }
}  */

// När man klickar på knappen så ser man sax
//Datorn väljer mellan sax, papper, sten där datorn nslumpäsiigt väljer en av dom
sizzorsBth.addEventListener("click", function () {
  dispayPlayear.innerText = playerChoise[0];
  //Dator slumpmässigt väljer
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    dispayComputer.innerText = "✌";
  } else if (computerChoice === 2) {
    dispayComputer.innerText = "✊";
  } else {
    dispayComputer.innerText = "🤚";
  }
  //regler för spelen
  if (playerChoise[0] == "✌") {
    if (computerChoice === 3) {
      scorePlayear.innerText = "point to playear";
      console.log("point to playear");
    } else if (computerChoice === 2) {
      dispayComputer.innerText = "point to computer";
      console.log("point to computer");
    } else {
      console.log("tie");
    }
  } else {
    console.log("error");
  }
});

// När man klickar på knappen så ser man sten
//Datorn väljer mellan sax, papper, sten där datorn nslumpäsiigt väljer en av dom
rockBth.addEventListener("click", function () {
  dispayPlayear.innerText = playerChoise[1];

  //Dator slumpmässigt väljer
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    dispayComputer.innerText = "✌";
  } else if (computerChoice === 2) {
    dispayComputer.innerText = "✊";
  } else {
    dispayComputer.innerText = "🤚";
  }
  //regler för spelen
  if (playerChoise[1] == "✊") {
    if (computerChoice === 1) {
      scorePlayear.innerText = "point to playear";
      console.log("point to playear");
    } else if (computerChoice === 3) {
      dispayComputer.innerText = "point to computer";
      console.log("point to computer");
    } else {
      console.log("tie");
    }
  } else {
    console.log("error");
  }
});

// När man klickar på knappen så ser man papper
//Datorn väljer mellan sax, papper, sten där datorn nslumpäsiigt väljer en av dom
papperBth.addEventListener("click", function () {
  dispayPlayear.innerText = playerChoise[2];
  //Dator slumpmässigt väljer
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    dispayComputer.innerText = "✌";
  } else if (computerChoice === 2) {
    dispayComputer.innerText = "✊";
  } else {
    dispayComputer.innerText = "🤚";
  }
  //regler för spelen
  if (playerChoise[2] == "🤚") {
    if (computerChoice === 2) {
      scorePlayear.innerText = "point to playear";
      console.log("point to playear");
    } else if (computerChoice === 1) {
      dispayComputer.innerText = "point to computer";
      console.log("point to computer");
    } else {
      console.log("tie");
    }
  } else {
    console.log("error");
  }
});

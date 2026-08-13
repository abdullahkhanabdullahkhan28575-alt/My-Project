alert("USE MOBILE PHONE TO BEST EXPERIENCE");
let buttons = document.querySelectorAll(".button");
let msg = document.querySelector(".status p");
let resetButton = document.querySelector(".resetButton");
let newButton = document.querySelector(".newGame");
let winPage = document.querySelector(".hide");
let plyX = document.querySelector("#playerOne");
let plyO = document.querySelector("#playerTwo");
let resetScoreButton = document.querySelector(".resetScore");
let turn = true; //turn flipping.
let count = 0;
let scoreOfX = 0;
let scoreOfO = 0;
const winConditons = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]; //all winning conditions.
let winChecker = () => {
  // check all winning conditions.
  for (let i of winConditons) {
    // take positions.
    let pos1 = buttons[i[0]].innerText;
    let pos2 = buttons[i[1]].innerText;
    let pos3 = buttons[i[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      //if any box will empty then never check winner.
      if (pos1 === pos2 && pos2 === pos3) {
        //if all boxes have same value it means they are winner.
        msg.innerText = `Winner Is ${pos1}`;
        for (let i of buttons) {
          //to disable all other else buttons.
          i.disabled = true;
        }
        winPage.classList.remove("hide"); //when winner will announce then show the result.
        count = 0;
        if (pos1 === 'X') {
          scoreOfX++;
          plyX.innerText = `Player X - ${scoreOfX}`;
        } else {
          scoreOfO++;
          plyO.innerText = `Player O - ${scoreOfO}`;
        }
      }

    }
    if (count === 9) {
      //if match will draw then show it and on page.
      msg.innerText = `Winner Is Draw`;
      for (let i of buttons) {
        //to disable all other else buttons.
        i.disabled = true;
      }
      winPage.classList.remove("hide");
      count = 0;
    }
  }
}
let empty = () => {
  //if we click new game or reset buttons then empty all buttons.
  for (let i of buttons) {
    i.innerText = "";
    i.disabled = false; //to enable all buttons again.
  };
}
buttons.forEach((buttons) => {
  //  <<<(main logic)>>>
  buttons.addEventListener("click", () => {
    //write X or O by click on buttons trun by turn.
    if (turn) {
      buttons.innerText = "X";
      buttons.style.color = "rgb(114, 113, 113)";
      turn = false; //Now player O turn
      count++;
    } else {
      buttons.innerText = "O";
      buttons.style.color = "rgba(204, 204, 204)";
      turn = true; //Now player X turn
      count++;
    };
    buttons.disabled = true; //when buttons clicked then it disabled to remove repeatations.
    winChecker();
    console.log(count);
  });
});
resetScoreButton.addEventListener("click", () => {
  scoreOfO = 0;
  scoreOfX = 0;
  plyX.innerText = `Player X - ${scoreOfX}`;
  plyO.innerText = `Player O - ${scoreOfO}`;
});
newButton.addEventListener("click", () => {
  empty();
  turn = true;
  winPage.classList.add("hide"); //when click new game button then win page hide again.
});
resetButton.addEventListener("click", () => {
  empty();
  turn = true;
});
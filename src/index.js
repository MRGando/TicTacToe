import "./Styles/style.scss";
import { player_X, player_O } from "./SinglePlayer";
import { _check } from "./Conditions";
export const boxElements = document.querySelectorAll(".box");
export let boxes = [...boxElements];
export let boxEffect = document.querySelectorAll(".xEffect");
export var obj = {
  X: true,
  setX: function (val) {
    this.X = val;
  },
  getX: function () {
    return this.X;
  },
};
const title = document.querySelector(".title");
const log = document.querySelector(".log");
const xLog = document.querySelector(".xPlayer");
const oLog = document.querySelector(".oPlayer");
let xScore = 0;
let oScore = 0;
//functionality
_singlePlayer();

function _singlePlayer() {
  _init_();
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (boxes.indexOf(box) > -1) {
        const index = boxes.indexOf(box);
        if (box.innerHTML != "") {
        } else {
          if (obj.X == true) {
            player_X(index, box);
            check();
          } else {
            player_O(index, box);
            check();
          }
        }
      }
    });
  });
}
function _init_() {
  boxEffect.forEach((box) => {
    box.setAttribute("data-value", "X");
    obj.setX(true);
    xLog.innerHTML = xScore;
    oLog.innerHTML = oScore;
  });
}
function check() {
  let result = _check();
  if (result == "X is winner!") {
    xScore += 1;
    log.style.display = "flex";
    title.innerHTML = "X won !";
    Reset();
  } else if (result == "O is winner!") {
    oScore += 1;
    log.style.display = "flex";
    title.innerHTML = "O won !";
    Reset();
  } else if (result == "draw") {
    log.style.display = "flex";
    title.innerHTML = "Draw";
    Reset();
  }
}
function Reset() {
  log.addEventListener("click", () => {
    log.style.display = "none";
    boxes = [...boxElements];
    boxes.forEach((box) => {
      box.innerHTML = "";
      box.classList.add("xEffect");
      xLog.innerHTML = xScore;
      oLog.innerHTML = oScore;
      _init_();
      _singlePlayer();
    });
  });
}

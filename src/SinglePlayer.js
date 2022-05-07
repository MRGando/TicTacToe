import { obj, boxes, boxEffect } from ".";
const clickSound = "./Assets/click.wav";
const audio = new Audio();
audio.src = clickSound;
export const player_X = (index, box) => {
  audio.play();
  obj.setX(false);
  boxes.splice(index, 1);
  box.innerHTML = "X";
  box.classList.remove("xEffect");
  boxEffect.forEach((box) => {
    box.setAttribute("data-value", "O");
  });
};

export const player_O = (index, box) => {
  audio.play();
  obj.setX(true);
  boxes.splice(index, 1);
  box.innerHTML = "O";
  box.classList.remove("xEffect");
  boxEffect.forEach((box) => {
    box.setAttribute("data-value", "X");
  });
};

const box_1 = document.querySelector(".box1");
const box_2 = document.querySelector(".box2");
const box_3 = document.querySelector(".box3");
const box_4 = document.querySelector(".box4");
const box_5 = document.querySelector(".box5");
const box_6 = document.querySelector(".box6");
const box_7 = document.querySelector(".box7");
const box_8 = document.querySelector(".box8");
const box_9 = document.querySelector(".box9");

export function _check() {
  if (
    box_1.innerHTML == "X" &&
    box_2.innerHTML == "X" &&
    box_3.innerHTML == "X"
  ) {
    return "X is winner!";
  } else if (
    box_1.innerHTML == "O" &&
    box_2.innerHTML == "O" &&
    box_3.innerHTML == "O"
  ) {
    return "O is winner!";
  } else if (
    box_4.innerHTML == "X" &&
    box_5.innerHTML == "X" &&
    box_6.innerHTML == "X"
  ) {
    return "X is winner!";
  } else if (
    box_4.innerHTML == "O" &&
    box_5.innerHTML == "O" &&
    box_6.innerHTML == "O"
  ) {
    return "O is winner!";
  } else if (
    box_7.innerHTML == "X" &&
    box_8.innerHTML == "X" &&
    box_9.innerHTML == "X"
  ) {
    return "X is winner!";
  } else if (
    box_7.innerHTML == "O" &&
    box_8.innerHTML == "O" &&
    box_9.innerHTML == "O"
  ) {
    return "O is winner!";
  } else if (
    box_1.innerHTML == "X" &&
    box_4.innerHTML == "X" &&
    box_7.innerHTML == "X"
  ) {
    return "X is winner!";
  } else if (
    box_1.innerHTML == "O" &&
    box_4.innerHTML == "O" &&
    box_7.innerHTML == "O"
  ) {
    return "O is winner!";
  } else if (
    box_2.innerHTML == "X" &&
    box_5.innerHTML == "X" &&
    box_8.innerHTML == "X"
  ) {
    return "X is winner!";
  } else if (
    box_2.innerHTML == "O" &&
    box_5.innerHTML == "O" &&
    box_8.innerHTML == "O"
  ) {
    return "O is winner!";
  } else if (
    box_3.innerHTML == "X" &&
    box_6.innerHTML == "X" &&
    box_9.innerHTML == "X"
  ) {
    return "X is winner!";
  } else if (
    box_3.innerHTML == "O" &&
    box_6.innerHTML == "O" &&
    box_9.innerHTML == "O"
  ) {
    return "O is winner!";
  } else if (
    box_1.innerHTML == "X" &&
    box_5.innerHTML == "X" &&
    box_9.innerHTML == "X"
  ) {
    return "X is winner!";
  } else if (
    box_1.innerHTML == "O" &&
    box_5.innerHTML == "O" &&
    box_9.innerHTML == "O"
  ) {
    return "O is winner!";
  } else if (
    box_3.innerHTML == "X" &&
    box_5.innerHTML == "X" &&
    box_7.innerHTML == "X"
  ) {
    return "X is winner!";
  } else if (
    box_3.innerHTML == "O" &&
    box_5.innerHTML == "O" &&
    box_7.innerHTML == "O"
  ) {
    return "O is winner!";
  } else if (
    box_1.innerHTML != "" &&
    box_2.innerHTML != "" &&
    box_3.innerHTML != "" &&
    box_4.innerHTML != "" &&
    box_5.innerHTML != "" &&
    box_6.innerHTML != "" &&
    box_7.innerHTML != "" &&
    box_8.innerHTML != "" &&
    box_9.innerHTML != ""
  ) {
    return "draw";
  }
}

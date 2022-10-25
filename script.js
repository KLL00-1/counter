const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const h1 = document.getElementById("h1");
let number = Number(h1.innerHTML);

function changeNumberUp() {
  number++;
  h1.innerHTML = number;
}
function changeNumberDown() {
  number--;
  h1.innerHTML = number;
}

upBtn.addEventListener("click", changeNumberUp);
downBtn.addEventListener("click", changeNumberDown);

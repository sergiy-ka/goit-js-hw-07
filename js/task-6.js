function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector("#boxes");
  let size = 30;
  destroyBoxes();
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = "";
}

const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", () => {
  if (input.value < 1 || input.value > 100) {
    //alert("Please enter a number between 1 and 100");
    return;
  }
  createBoxes(input.value);
  input.value = "";
});
destroyBtn.addEventListener("click", destroyBoxes);

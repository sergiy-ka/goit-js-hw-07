function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

elements.button.addEventListener("click", () => {
  const color = getRandomHexColor();
  elements.body.style.backgroundColor = color;
  elements.span.textContent = color;
});

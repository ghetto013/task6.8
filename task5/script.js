const INPUT = document.querySelector("input");

const double = document.querySelector("#duplicateField");

INPUT.addEventListener("input", updateValue);

function updateValue(e) {
  double.textContent = e.target.value;
};

document.querySelector('button').addEventListener('click', (event) => {
  console.log(double);
  event.preventDefault();
});
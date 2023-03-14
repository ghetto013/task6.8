let lights = document.querySelectorAll('.light')
let green = lights[0]
let yellow = lights[1]
let red = lights[2]

function fooGreen() {
  this.style.background = 'green'
  yellow.style.background = ''
  red.style.background = ''
}

function fooYellow() {
  this.style.background = 'yellow'
  red.style.background = ''
  green.style.background = ''
}

function fooRed() {
  this.style.background = 'red'
  yellow.style.background = ''
  green.style.background = ''
}

green.addEventListener('click', fooGreen);

yellow.addEventListener('click', fooYellow);

red.addEventListener('click', fooRed);
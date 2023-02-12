const gridContainer = document.querySelector('.grid-container')
const slider = document.getElementById('slider')
const colorBtn = document.getElementById('color')
const rainbowBtn = document.getElementById('rainbow')
const greyScaleBtn = document.getElementById('grey-scale')
const eraserBtn = document.getElementById('eraser')
const clearBtn = document.getElementById('clear')
const colorPicker = document.querySelector('.pick')

createGrid(slider.value)

const colors = ["black", "red", "blue", "green", "yellow"];

let currentColor = 'black'
let currentMode = 'color'
// currentMode.classList.add('active')

function chooseColor() {
  if (currentMode === 'rainbow') {
    currentColor = getRandomColor()
  }
  if (currentMode === 'grey scale'){
    currentColor = get
  }
}
print(chooseColor())

eraserBtn.onclick = e => updateMode(e.target);


// function updateMode(mode) {
//   currentMode.classList.toggle('active')
//   currentMode = mode
//   currentMode.classList.toggle('active')
// }


slider.onchange = (e) => {
  gridContainer.innerHTML = ''
  createGrid(e.target.value)
}

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div")
      cell.classList.add("grid-cell")
      cell.addEventListener("mousedown", () => {
        chooseColor()
        cell.style.backgroundColor = currentColor
      })
      cell.addEventListener("mouseover", (event) => {
        if (event.buttons === 1) {
          chooseColor()
          cell.style.backgroundColor = currentColor
        }
      })
      gridContainer.appendChild(cell)
    }
    gridContainer.style.cssText = `
    grid-template-columns: repeat(${size}, 1fr); 
    grid-template-rows: repeat(${size}, 1fr);`
  }
}

const getNextColor = (currentColor) => {
  const currentIndex = colors.indexOf(currentColor);
  return colors[(currentIndex + 1) % colors.length];
};


function print(x){
  console.log(x)
}
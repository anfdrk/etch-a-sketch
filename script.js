const gridContainer = document.querySelector('.grid-container')
const slider = document.getElementById('slider')
const colorBtn = document.getElementById('color')
const rainbowBtn = document.getElementById('rainbow')
const greyScaleBtn = document.getElementById('grey-scale')
const eraserBtn = document.getElementById('eraser')
const clearBtn = document.getElementById('clear')
const colorInput = document.getElementById("color-input");

let currentColor = colorInput.value
let currentMode = 'color'
colorBtn.classList.add('active')
createGrid(slider.value)

colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
greyScaleBtn.onclick = () => setCurrentMode('grey scale')
eraserBtn.onclick = () => setCurrentMode('eraser')
clearBtn.onclick = () => clearGrid()

function setCurrentMode(newMode) {
  activateButton(newMode)
  currentMode = newMode
}

function activateButton(newMode) {
  if (currentMode === 'rainbow') {
    rainbowBtn.classList.remove('active')
  } else if (currentMode === 'color') {
    colorBtn.classList.remove('active')
  } else if (currentMode === 'eraser') {
    eraserBtn.classList.remove('active')
  } else if (currentMode === 'grey scale') {
    greyScaleBtn.classList.remove('active')
  }

  if (newMode === 'rainbow') {
    rainbowBtn.classList.add('active')
  } else if (newMode === 'color') {
    colorBtn.classList.add('active')
  } else if (newMode === 'eraser') {
    eraserBtn.classList.add('active')
  } else if (newMode === 'grey scale') {
    greyScaleBtn.classList.add('active')
  }
}

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

function chooseColor(info) {
  print(info)
  if (currentMode === 'rainbow') {
    currentColor = getRandomColor()
  } else if (currentMode === 'grey scale'){
    currentColor = getShade()
  } else if (currentMode === 'eraser') {
    currentColor = '#CFD6D0'
  } else if (currentMode === 'color') {
    currentColor = colorInput.value
  }

}

function clearGrid() {
  gridContainer.innerHTML = ''
  createGrid(slider.value)
}

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 100%, 70%)`;
}

// --------------------------------------------------------------

function print(x){
  console.log(x)
}
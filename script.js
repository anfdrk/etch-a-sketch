const gridContainer = document.querySelector('.grid-container')
const slider = document.getElementById('slider')

makeGrid(slider.value)

slider.addEventListener("input", () => {
  gridContainer.innerHTML = ''
  makeGrid(slider.value)
})

function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div")
      cell.classList.add("grid-cell")
      gridContainer.appendChild(cell)
    }
    gridContainer.style.cssText = `
    grid-template-columns: repeat(${size}, 1fr); 
    grid-template-rows: repeat(${size}, 1fr);`
  }
}



function print(x){
  console.log(x)
}
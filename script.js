const gridContainer = document.querySelector('.grid-container')
const slider = document.getElementById('slider')


makeGrid()



function makeGrid() {
  for (let i = 0; i < slider.value; i++) {
    for (let j = 0; j < slider.value; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      gridContainer.appendChild(cell);
    }
    gridContainer.style.cssText = `
    grid-template-columns: repeat(${slider.value}, 1fr); 
    grid-template-rows: repeat(${slider.value}, 1fr);`
  }
}



function print(x){
  console.log(x)
}
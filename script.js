const container = document.querySelector('div.container');
const rootCanvasWidth = document.querySelector(':root');

let sideWidth = prompt("What size would you like for the canvas? (width only)");
let totalNumPixel = parseInt(sideWidth)**2;

rootCanvasWidth.style.setProperty('--canvas-side-width', sideWidth);

for (let n = 0; n < totalNumPixel; n++) {
    const grid = document.createElement('div');
    grid.classList.add('pixel');
    // grid.textContent = n + 1;

    grid.addEventListener('mouseover', () => {
        grid.classList.add('active');
    })

    container.appendChild(grid);
};
const container = document.querySelector('div.container');
const rootCanvasWidth = document.querySelector(':root');

let sideWidthString = prompt("What size would you like for the canvas? (width only)");
let sideWidth = parseInt(sideWidthString);

if (sideWidth > 100) { sideWidth = 100; };
let totalNumPixel = sideWidth**2;

rootCanvasWidth.style.setProperty('--canvas-side-width', sideWidth);

for (let n = 0; n < totalNumPixel; n++) {
    const grid = document.createElement('div');
    grid.classList.add('pixel');

    grid.addEventListener('mouseover', () => {
        grid.classList.add('active');
    })

    container.appendChild(grid);
};
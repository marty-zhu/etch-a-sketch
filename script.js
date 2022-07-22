const container = document.querySelector('div.container');
const rootCanvasWidth = document.querySelector(':root');

// TODO: figure out why this is not working
function setCanvas() {
    let sideWidthString = prompt("What size would you like for the canvas? (width only)");
    let sideWidth = parseInt(sideWidthString);

    if (sideWidth > 100) { sideWidth = 100; };
    let totalNumPixel = sideWidth**2;

    rootCanvasWidth.style.setProperty('--canvas-side-width', sideWidth);

    const canvas = document.createElement('div');
    canvas.classList.add('canvas');

    for (let n = 0; n < totalNumPixel; n++) {
        const grid = document.createElement('div');
        grid.classList.add('pixel');

        grid.addEventListener('mouseover', () => {
            grid.classList.add('active');
        })

        canvas.appendChild(grid);
    };

    container.appendChild(canvas);
};

function resetCanvas() {
    const canvas = document.querySelector('div.canvas');
    container.removeChild(canvas);
    setCanvas();
}

setCanvas();
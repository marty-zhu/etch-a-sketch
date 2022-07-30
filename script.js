const container = document.querySelector('div.container');
const rootCanvasWidth = document.querySelector(':root');
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

function genRandInt() {
    return Math.floor(Math.random() * 255);
}

function setCanvas() {
    let sideWidthString = prompt("What size would you like for the canvas? (width only)");
    let sideWidth = parseInt(sideWidthString);
    let pixelWidth = Math.max(vh * 0.9 / sideWidth, 1);

    if (sideWidth > 100) { sideWidth = 100; };
    let totalNumPixel = sideWidth**2;

    rootCanvasWidth.style.setProperty('--canvas-side-width', sideWidth);
    rootCanvasWidth.style.setProperty('--pixel-width', pixelWidth);

    const canvas = document.createElement('div');
    canvas.classList.add('canvas');

    for (let n = 0; n < totalNumPixel; n++) {
        const grid = document.createElement('div');
        grid.classList.add('pixel');
        grid.classList.add('border');

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
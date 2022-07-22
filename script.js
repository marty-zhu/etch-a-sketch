const container = document.querySelector('div.container');

for (let n = 0; n < 256; n++) {
    const grid = document.createElement('div');
    grid.classList.add('pixel');
    grid.classList.add('inactive');
    grid.textContent = n + 1;

    container.appendChild(grid);
}
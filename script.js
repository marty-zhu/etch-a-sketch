const container = document.querySelector('div.container');

for (let n = 0; n < 256; n++) {
    const grid = document.createElement('div');
    grid.classList.add('pixel');
    grid.textContent = n + 1;

    grid.addEventListener('mouseover', () => {
        grid.classList.add('active');
    })

    container.appendChild(grid);
}
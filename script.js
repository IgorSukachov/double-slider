let leftBlock = document.querySelector('.block-left')
let rightBlock = document.querySelector('.block-right')

let y = 0
document.querySelector('.row-slider').addEventListener('mousewheel', (e) => {
    if (e.deltaY < 0 && y >= 10) {
        y = y - 10
    } else if (e.deltaY > 0 && y < 1060) {
        y = y + 10
    }
    leftBlock.style.top = -y + 'px'
    rightBlock.style.bottom = -y + 'px'
})
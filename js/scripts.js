// Custom Scripts
// // Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.left__item')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1149.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


const elemsAnim = document.querySelectorAll('.dashboard__item');
const laptopScreen = window.matchMedia('(max-width: 1150px');

if (!laptopScreen.matches === true) {
    
    elemsAnim.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 600)
    });
} else {
    const elemRight = document.querySelector('.right__item');
    const elemLeft = document.querySelector('.left__item');
    elemRight.classList.add('mobile');
    elemLeft.style.opacity = 1;
}




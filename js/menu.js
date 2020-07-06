
(() => {
    const ipad = window.matchMedia('screen and (max-width: 767px)');

        console.log('Se ejecuto');
        const menu = document.querySelector('.menu');
        const burgerMenu = document.querySelector('#burger-menu');
        const hideShow = () => {
            if (menu.classList.contains('is-active')) {
                menu.classList.remove('is-active');

            }
            else {
                menu.classList.add('is-active');
            }

        }
        
    
    const validation = (event) => {
        if (ipad.matches) {
            burgerMenu.addEventListener(
                'click',
                hideShow
            );
        }
        else{
            burgerMenu.removeEventListener('click',hideShow);
        }
    }
    ipad.addListener(validation);
})()

(() => {
    const ipad = window.matchMedia('screen and (max-width: 767px)');

        
        const menu = document.querySelector('.menu');
        const burgerMenu = document.querySelector('#burger-menu');
        const hideShow = () => {
            console.log('Se ejecuto');
            if (menu.classList.contains('is-active')) {
                menu.classList.remove('is-active');

            }
            else {
                menu.classList.add('is-active');
            }

        }
        
    
    const validation = (event) => {
        if (event.matches) {
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
    validation(ipad);
})()
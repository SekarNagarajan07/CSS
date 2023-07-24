document.addEventListener('DOMContentLoaded',()=> {
    const sideNav = document.querySelector('.side-nav');
    const btnNav = document.querySelector('#btnName');
    const overlayScreen = document.querySelector('.nav-overlay');

    btnNav.addEventListener('click',()=> {
        sideNav.classList.add("open")
    });

    overlayScreen.addEventListener('click',()=> {
        sideNav.classList.remove("open")
    });
});
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const themeToggler = document.querySelector('.theme-toggler');

// Check if elements exist before adding event listeners
if (menuBtn && sideMenu) {
    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block';
    });
}

if (closeBtn && sideMenu) {
    closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
    });
}
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables')
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})
const menu = document.querySelector('button');
const navMenu = document.querySelector('ul');

menu.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

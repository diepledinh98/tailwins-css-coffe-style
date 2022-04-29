const topMenu = document.getElementById('tc-top-menu');
const toggleTopMenuIcon = document.getElementById('tc-top-menu-icon');

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('tc-top-menu-expanded')
        topMenu.classList.toggle('hidden')

    }
    else {
        if (topMenu.classList.contains('tc-top-menu-expanded')) {
            topMenu.classList.remove('tc-top-menu-expanded');
            topMenu.classList.add('hidden');
        }
    }
})
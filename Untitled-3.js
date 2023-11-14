document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('hamburgerlist');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('hamburgerlist');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});


document.getElementById('usericon').addEventListener('click', function() {
    var dropdown = document.getElementById('accountDropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});


document.querySelector('account-text').addEventListener('click', function() {
    var dropdown = document.getElementById('accountDropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});
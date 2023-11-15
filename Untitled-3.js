document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('hamburgerlist');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('userIcon').addEventListener('click', function(event) {
        event.preventDefault();
        var dropdown = document.getElementById('mobilelogin');
        dropdown.classList.toggle('active');
    });
});
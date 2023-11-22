// ----------- HEADER/NAVBAR FUNCTIONALITY ------------ 

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


document.querySelector('.account-text').addEventListener('click', function() {
    var text = document.getElementById('accountDropdown');
    if (text.style.display === 'block') {
        text.style.display = 'none';
    } else {
        text.style.display = 'block';
    }
});



// ----------- SWITCH BETWEEN EMPLOYEE AND EMPLOYER VIEW FUNCTIONS -------------
// Will recieve harmless TypeError message in debug console, the error message is caused by the relevent elements (E.g,'employeeview' and 'employerview') not existing on any pages other than the Profile page.
// Tried to place it in the dedicated inline-script tag, but caused the function to no longer run; unsure why.


// ----------- PROFILE PAGE: -------------
document.addEventListener('DOMContentLoaded', function () {
    
    var nologonButton = document.getElementById('nologon')
    var employeeViewButton = document.getElementById('employeeview');
    var employerViewButton = document.getElementById('employerview');
    var profileContainer = document.getElementById('profilecontainer');
    var profileContainer1 = document.getElementById('profilecontainer1');
    var accountform = document.getElementById('accountcontainer')

    nologonButton.addEventListener('click', function() {
        profileContainer.style.display = 'none';
        profileContainer1.style.display = 'none';
        accountform.style.display = 'flex';
    });

    employeeViewButton.addEventListener('click', function() {
        profileContainer.style.display = 'block';
        profileContainer1.style.display = 'none';
        accountform.style.display = 'none';
    });

    employerViewButton.addEventListener('click', function() {
        profileContainer.style.display = 'none';
        accountform.style.display = 'none';
        profileContainer1.style.display = 'block';
    });
});


// ----------- JOBS PAGE -------------
document.addEventListener('DOMContentLoaded', function () {
    
    var employeeViewButton = document.getElementById('employeeviewJobs');
    var employerViewButton = document.getElementById('employerviewJobs');
    var jobspage = document.getElementById('jobspage');
    var studentsPage = document.getElementById('studentsPage');
    var toggleFiltersButtonJobs = document.getElementById('toggleFiltersButtonJobs');
    var filterFormJobs = document.getElementById('filterFormJobs');
    var toggleFiltersButtonStudents = document.getElementById('toggleFiltersButtonStudents');
    var filterFormStudents = document.getElementById('filterFormStudents');

    toggleFiltersButtonJobs.addEventListener('click', function() {
        filterFormJobs.classList.toggle('show'); // Toggle for jobspage
    });

    toggleFiltersButtonStudents.addEventListener('click', function() {
        filterFormStudents.classList.toggle('show'); // Toggle for studentsPage
    });

    employeeViewButton.addEventListener('click', function() {
        jobspage.style.display = 'flex';
        studentsPage.style.display = 'none';
    });

    employerViewButton.addEventListener('click', function() {
        jobspage.style.display = 'none';
        studentsPage.style.display = 'flex';
    });
});
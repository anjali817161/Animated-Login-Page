document.addEventListener('DOMContentLoaded', function () {
    const userId = document.getElementById('user-id');
    const password = document.getElementById('password');
    const rememberMe = document.getElementById('remember-me');
    const loginButton = document.getElementById('login-button');
    const enrollButton = document.getElementById('enroll-button');
    const dropdown = document.getElementById('dropdown');
    const leftSection = document.getElementById('left-section');
    const logo = document.getElementById('logo');
    const logoContainer = document.getElementById('logo-container')
    const sideImage = document.getElementById('side-image');
    const backButton = document.getElementById('back-button');

    // Function to check if both fields are filled
    function checkFields() {
        if (userId.value.trim() !== '' && password.value.trim() !== '') {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    }

    

    // Add event listeners to both fields to check when user types
    userId.addEventListener('input', checkFields);
    password.addEventListener('input', checkFields);

    // Login button event listener
    loginButton.addEventListener('click', function () {
        // Hide the left section
        leftSection.style.animation = 'fadeOut 1s forwards';
        // Spin and move logo to center
        logo.style.animation = 'spinAndCenter 10s forwards';
        // Hide the entire page
        document.body.style.overflow = 'hidden';

        userId.value = '';
        password.value = '';
        rememberMe.checked = false;
    

        // Show the right-side image fully after 5 seconds
        setTimeout(() => {
            sideImage.style.display = 'block';
            backButton.style.display='block';
            sideImage.style.animation = 'expandImage 1.5s forwards';
        }, 3000);

       
    });

    // Toggle dropdown on enroll button click
    enrollButton.addEventListener('click', function () {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Back button event listener
    backButton.addEventListener('click', function () {
        sideImage.style.animation = 'shrinkImage 1.5s forwards';
        backButton.style.display = 'none';
        logoContainer.style.mixBlendMode = 'color-burn';

        setTimeout(() => {
            sideImage.style.display = 'block';
            logoContainer.style.display = 'block';
            logo.style.animation = 'returnToPosition 1s forwards';
            leftSection.style.animation = 'fadeIn 1s forwards';
            document.body.style.overflow = 'auto';
            loginButton.disabled = true; 

        }, 1200);
    });
});

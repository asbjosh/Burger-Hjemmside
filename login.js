document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const homeButton = document.querySelector('.home');

    if (loginLink) {
        loginLink.addEventListener('click', () => {
            console.log("Login link clicked");
            window.location.pathname = "Login.html"; 
        });
    } else {
        console.error("Login link not found!");
    }

    if (registerLink) {
        registerLink.addEventListener('click', () => {
            console.log("Register link clicked");
            window.location.pathname = "Register.html"; 
        });
    } else {
        console.error("Register link not found!");
    }

    if (homeButton) {
        homeButton.addEventListener('click', () => {
            console.log("Home button clicked");
            window.location.pathname = "Index.html"; 
        });
    } else {
        console.error("Home button not found!");
    }
});

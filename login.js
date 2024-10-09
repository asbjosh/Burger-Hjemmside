// Wait until the entire HTML document is fully loaded before executing this code
document.addEventListener('DOMContentLoaded', () => {

    // Select the login link, register link, and home button elements from the DOM
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const homeButton = document.querySelector('.home');

    // Check if the login link exists, then add a click event listener
    if (loginLink) {
        loginLink.addEventListener('click', () => {
            // Log a message when the login link is clicked
            console.log("Login link clicked");
            // Redirect the user to the Login.html page
            window.location.pathname = "Login.html"; 
        });
    } else {
        // Log an error if the login link is not found
        console.error("Login link not found!");
    }

    // Check if the register link exists, then add a click event listener
    if (registerLink) {
        registerLink.addEventListener('click', () => {
            // Log a message when the register link is clicked
            console.log("Register link clicked");
            // Redirect the user to the Register.html page
            window.location.pathname = "Register.html"; 
        });
    } else {
        // Log an error if the register link is not found
        console.error("Register link not found!");
    }

    // Check if the home button exists, then add a click event listener
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            // Log a message when the home button is clicked
            console.log("Home button clicked");
            // Redirect the user to the Index.html page (home page)
            window.location.pathname = "Index.html"; 
        });
    } else {
        // Log an error if the home button is not found
        console.error("Home button not found!");
    }
});

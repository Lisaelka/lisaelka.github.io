document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get input values
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Provided email and password for validation
        const correctEmail = "gominsi15@gmail.com";
        const correctPassword = "youthofmay15";

        // Perform validation
        if (email === correctEmail && password === correctPassword) {
            // Redirect to welcome page
            window.location.href = "halaman welcome.html";
        } else {
            // Show error message
            if (password.length < 8) {
                errorMessage.textContent = "Password must be at least 8 characters long.";
            } else {
                errorMessage.textContent = "Invalid email or password. Please try again.";
            }
            errorMessage.style.display = "block";
        }
    });
});

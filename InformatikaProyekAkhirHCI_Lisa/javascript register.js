document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');
    const firstName = document.querySelector('input[type="text"][placeholder="Enter first name"]');
    const lastName = document.querySelector('input[type="text"][placeholder="Enter last name"]');
    const email = document.querySelector('input[type="text"][placeholder="Enter email address"]');
    const phoneNumber = document.querySelector('input[type="number"][placeholder="Enter phone number"]');
    const birthDate = document.querySelector('input[type="date"][placeholder="Enter birth date"]');
    const genderMale = document.getElementById('check-male');
    const genderFemale = document.getElementById('check-female');
    const address = document.querySelector('input[type="text"][placeholder="Enter street address"]');
    const country = document.querySelector('select');
    const city = document.querySelector('input[type="text"][placeholder="Enter your city"]');
    const region = document.querySelector('input[type="text"][placeholder="Enter your region"]');
    const postalCode = document.querySelector('input[type="number"][placeholder="Enter postal code"]');
    const profilePicture = document.getElementById('input-box');
    const password = document.querySelector('input[type="text"][placeholder="Enter password"]');
    const confirmPassword = document.querySelector('input[type="text"][placeholder="Enter password again"]');
    const errorElement = document.getElementById('error-message');
    
    form.addEventListener('submit', function(event) {
        let errors = [];
        
        // Check first name
        if(firstName.value.trim().length < 3) {
            errors.push("First name must be at least 3 characters long.");
        }
        
        // Check last name
        if(lastName.value.trim().length < 3) {
            errors.push("Last name must be at least 3 characters long.");
        }

        // Check email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email.value.trim())) {
            errors.push("Please enter a valid email address.");
        }

        // Check phone number
        if(isNaN(phoneNumber.value.trim())) {
            errors.push("Phone number must be a number.");
        }

        // Check birth date
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if(!dateRegex.test(birthDate.value)) {
            errors.push("Please enter a valid birth date.");
        }

        // Check gender
        if(!genderMale.checked && !genderFemale.checked) {
            errors.push("Please select a gender.");
        }

        // Check address
        if(address.value.trim() === '' || country.value === 'Country' || city.value.trim() === '' || region.value.trim() === '' || isNaN(postalCode.value.trim())) {
            errors.push("Please fill out the address completely.");
        }

        // Check profile picture
        if(profilePicture.value === '') {
            errors.push("Please select a profile picture.");
        }

        // Check password
        if(password.value.trim().length < 8) {
            errors.push("Password must be at least 8 characters long.");
        }

        // Check confirm password
        if(password.value.trim() !== confirmPassword.value.trim()) {
            errors.push("Passwords do not match.");
        }

        // Display errors if any
        if(errors.length > 0) {
            event.preventDefault();
            errorElement.innerText = errors.join('\n');
            errorElement.style.display = 'block'; // Show the error message element
        } else {
            // If no errors, hide error message and proceed with form submission
            errorElement.style.display = 'none';
            // If email and password are correct, redirect to the home page
            window.location.href = "halaman welcome.html";
        }
    });
});

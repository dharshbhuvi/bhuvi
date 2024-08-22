// script.js
function validateForm() {
    // Get form elements
    const firstname = document.getElementById('firstname').value.trim();
    const lastname=document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const age=document.getElementById('age').value.trim();
    var namePattern=/\d/;

    if(namePattern.test(firstname)||namePattern.test(lastname)){
        alert('names cannot contain numbers.')
        return false;
    }

    
    // Check if username is empty
    if (firstname==='') {
        alert('first name is required');
        return false;
    }

    if (lastname === '') {
        alert('lastname is required.');
        return false;
    }
    
    // Check if email is empty or invalid
    if (email === '') {
        alert('Email is required.');
        return false;
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // Check if password is empty
    if (password === '') {
        alert('Password is required.');
        return false;
    } else if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    if(age<18){
        alert('you must be 18 to register this form');
        return false;
    }
    else{
        alert("registeration successfull")
        return true;
    }
    
    // If all checks pass
    alert('Registration successful!');
    return true;
}

// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Example script for simple form validation or interaction

// Handling login form submission (for illustration purposes)
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username && password) {
        alert("Login successful!");
    } else {
        alert("Please fill in all fields.");
    }
});

// Handling signup form submission
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(username && email && password) {
        alert("Sign up successful!");
    } else {
        alert("Please fill in all fields.");
    }
});

// Handling upload form submission
document.getElementById("upload-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let file = document.getElementById("file").files[0];
    let description = document.getElementById("description").value;

    if(file && description) {
        alert("Material uploaded successfully!");
    } else {
        alert("Please complete all fields.");
    }
});

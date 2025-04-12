// Login form
const loginForm = document.getElementById("login-form");
if (loginForm) {
    const usernameField = document.getElementById("username");
    if (usernameField) {
        let username = usernameField.value;
    } else {
        console.error("Username field is missing.");
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let password = document.getElementById("password").value;

        if (username && password) {
            alert("Login successful!");
        } else {
            alert("Please fill in all fields.");
        }
    });
}

// Signup form
const signupForm = document.getElementById("signup-form");
if (signupForm) {
    const usernameField = document.getElementById("username");
    if (usernameField) {
        let username = usernameField.value;
    } else {
        console.error("Username field is missing.");
    }

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (username && email && password) {
            alert("Sign up successful!");
        } else {
            alert("Please fill in all fields.");
        }
    });
}

// Upload form
const uploadForm = document.getElementById("upload-form");
if (uploadForm) {
    uploadForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let file = document.getElementById("file").files[0];
        let description = document.getElementById("description").value;

        if (file && description) {
            alert("Material uploaded successfully!");
        } else {
            alert("Please complete all fields.");
        }
    });
}

// Lottie animation
const lottieContainer = document.getElementById("lottie-container");
if (lottieContainer) {
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "assets/animations/book-transfer.json"
    });
}

// Message display function
function showMessage(message, type = "success") {
    const messageBox = document.getElementById("message-box");
    if (messageBox) {
        messageBox.textContent = message;
        messageBox.className = type; // Add a class for styling
    }
}

// Field validation function
function validateFields(fields) {
    return fields.every(field => field && field.value.trim());
}

// Year display
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}



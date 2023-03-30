const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}


function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function emailValidation(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault(); //when we click on submit, it just submits, but we don't want that, we want to hold for a while
    if (username.value === "") {
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }

    if (email.value === "") {
        showError(email, "Email is required");
    } else if (!emailValidation(email.value)) {
        showError(email, "Email is not valid");
    } else {
        showSuccess(email);
    }

    if (password.value === "") {
        showError(password, "Password is required");
    } else {
        showSuccess(password);
    }

    if (password2.value === "") {
        showError(password2, "Password 2 is required");
    } else {
        showSuccess(password2);
    }
    checkPasswordsMatch(password, password2);
});  
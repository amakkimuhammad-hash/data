/*=========================================
            MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            menuBtn.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

}


/*=========================================
        CHANGE MESSAGE BUTTON
=========================================*/

const changeBtn = document.getElementById("changeBtn");
const message = document.getElementById("message");

if (changeBtn && message) {

    changeBtn.addEventListener("click", () => {
        message.textContent = "JavaScript is working!";
    });

}


/*=========================================
            CONTACT FORM
=========================================*/

const contactForm = document.getElementById("contactForm");
const error = document.getElementById("error");

if (contactForm && error) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name === "" || email === "") {

            error.style.color = "red";
            error.textContent = "Please fill in all fields.";

        } else {

            error.style.color = "green";
            error.textContent = "Form submitted successfully!";

            contactForm.reset();
        }

    });

}


/*=========================================
            DARK THEME
=========================================*/

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";

    });

}


/*=========================================
            LOGIN FORM
=========================================*/

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    const SECRET_PASSWORD = "Makki2026"; // Change this password

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = loginForm.querySelector('input[type="text"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value;

        if (username === "" || password === "") {

            alert("Please fill in all fields.");
            return;

        }

        if (password === SECRET_PASSWORD) {

            alert("Login successful!");

            window.location.href = "plans.html";

        } else {

            alert("Incorrect password!");

        }

    });

}


/*=========================================
            SIGN-UP FORM
=========================================*/

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = signupForm.querySelectorAll("input");

        let complete = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {
                complete = false;
            }

        });

        if (!complete) {

            alert("Please complete all fields.");
            return;

        }

        alert("Account created successfully!");

        window.location.href = "plans.html";

    });

}
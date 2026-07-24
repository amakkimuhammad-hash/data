const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
const menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
const button = document.getElementById("changeBtn");

button.onclick = function () {
    document.getElementById("message").innerHTML = "JavaScript is working!";
};
const form = document.querySelector("#contactForm");
const error = document.querySelector("#error");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    if (name === "" || email === "") {
        error.textContent = "Please fill all fields";
    } else {
        error.textContent = "Form submitted successfully";
    }

});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});
const form = document.querySelector("form");

// Change this to your own password
const SECRET_PASSWORD = "Makki2026";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.querySelector('input[type="text"]').value.trim();
    const password = document.querySelector('input[type="password"]').value;

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
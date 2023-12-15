var typed = new Typed(".text", {
    strings: [
        "<span style='color: #ff5733;'>Business Analyst</span>",
        "<span style='color: #33ff33;'>Data Analyst</span>",
        "<span style='color: #3366ff;'>Business Intelligence Developer</span>"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    showCursor: false, // Optional: Hide the cursor if needed
    smartBackspace: false // Optional: Disable smart backspace
});

// main.js
document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger-menu');
    var navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});


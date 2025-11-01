/**
 * script.js
 * Handles dynamic content and basic interactive elements
 * for Okiemute Emmanuel's portfolio website.
 */

// 1. Mobile Menu Toggle Logic
document.addEventListener('DOMContentLoaded', function() {
    // Get the elements we need to interact with
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav a'); // Get all navigation links

    // Function to toggle the mobile menu state
    function toggleMenu() {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
        // Prevent body scrolling when the menu is open (better mobile experience)
        if (navList.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    // Add event listener to the hamburger icon
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Close the menu when a link inside is clicked (to navigate to the section)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                toggleMenu(); // Closes the menu
            }
        });
    });


    // 2. Dynamic Copyright Year
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
});

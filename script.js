// js/script.js

// Optional: Simple smooth scroll for internal navigation links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href'); // Get the target section ID (e.g., "#about")
            const targetElement = document.querySelector(targetId); // Find the element

            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // For Bootstrap nav, close the mobile menu after clicking a link
                // This checks if the navbar is collapsed and if the toggle button exists
                const navbarCollapse = document.getElementById('navbarNav');
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse); // Get Bootstrap's Collapse instance
                if (bsCollapse && navbarCollapse.classList.contains('show')) {
                    bsCollapse.hide(); // Hide the navbar
                }
            }
        });
    });
});
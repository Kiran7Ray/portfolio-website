function submitForm(event) {
    event.preventDefault();
    alert("Thank you for your message! This is a demo form.");
    document.getElementById("contactForm").reset();
}

// Add any other interactive logic here
document.addEventListener('DOMContentLoaded', () => {
    // Example: Hamburger menu toggle logic could go here if not handled by CSS/HTML only
    const hamburger = document.getElementById('hamburger');
    const sidebarContent = document.querySelector('.sidebar-content');

    if (hamburger && sidebarContent) {
        hamburger.addEventListener('click', () => {
            // Toggle local class for animation if needed (optional)
            hamburger.classList.toggle('hamburger-active');

            // Toggle global state class
            document.body.classList.toggle('sidebar-toggled');

            // Toggle Icon
            if (this.classList.contains('fa-bars')) {
                this.classList.remove('fa-bars');
                this.classList.add('fa-xmark');
            } else {
                this.classList.remove('fa-xmark');
                this.classList.add('fa-bars');
            }
        });
    }
});

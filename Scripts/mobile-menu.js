// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // You can add additional menu functionality here
            // For example, showing/hiding a mobile navigation menu
            const headerMiddleSection = document.querySelector('.fashion-header-middle-section');
            if (headerMiddleSection) {
                headerMiddleSection.classList.toggle('mobile-visible');
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const header = document.querySelector('.fashion-header');
        if (header && !header.contains(event.target)) {
            if (mobileMenuBtn && mobileMenuBtn.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                const headerMiddleSection = document.querySelector('.fashion-header-middle-section');
                if (headerMiddleSection) {
                    headerMiddleSection.classList.remove('mobile-visible');
                }
            }
        }
    });
});

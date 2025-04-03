document.addEventListener('DOMContentLoaded', function() {
    const valueItems = document.querySelectorAll('.value-item');
    let currentlyExpanded = null;

    function isMobileView() {
        return window.innerWidth <= 768;
    }

    valueItems.forEach(item => {
        item.addEventListener('click', function() {
            if (!isMobileView()) return; // Only handle clicks in mobile view

            if (currentlyExpanded && currentlyExpanded !== this) {
                // Collapse the currently expanded item
                currentlyExpanded.classList.remove('expanded');
            }

            // Toggle the clicked item
            this.classList.toggle('expanded');
            
            // Update the currently expanded item
            currentlyExpanded = this.classList.contains('expanded') ? this : null;
        });
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (!isMobileView() && currentlyExpanded) {
            // Remove expanded class when switching to desktop view
            currentlyExpanded.classList.remove('expanded');
            currentlyExpanded = null;
        }
    });
}); 
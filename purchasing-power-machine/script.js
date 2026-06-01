document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that need to fade up
    const fadeUpElements = document.querySelectorAll('.fade-up');
    const scrollPrompt = document.querySelector('.scroll-prompt');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    // Create an Intersection Observer
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active class to trigger CSS transition
                entry.target.classList.add('active');
                
                // Optional: Unobserve if we only want the animation to happen once
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove class if we want it to animate every time it comes into view
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    // Observe each element
    fadeUpElements.forEach(el => {
        observer.observe(el);
    });

    // Fade out the initial prompt when user starts scrolling
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.addEventListener('scroll', () => {
        if (modalOverlay.scrollTop > 50) {
            scrollPrompt.style.opacity = '0';
            scrollPrompt.style.transition = 'opacity 0.5s ease';
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transition = 'opacity 0.5s ease';
        } else {
            scrollPrompt.style.opacity = '0.8';
            scrollIndicator.style.opacity = '1';
        }
    });
});

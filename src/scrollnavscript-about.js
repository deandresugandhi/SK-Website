const container = document.querySelector("#scroll-container");
const cards = document.querySelectorAll("#scroll-container #card");

const changeElements = [...cards];

const options = {
    root: container,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const card = entry.target;

        if (entry.isIntersecting) {
            const distance = Math.min(entry.boundingClientRect.right, container.offsetWidth) - Math.max(entry.boundingClientRect.left, 0);
            const percentageVisible = (distance / container.offsetWidth) * 100;

            // Adjust the scale based on the percentageVisible
            const scale = 1 + (0.2 * (percentageVisible / 100));

            card.style.transform = `scale(${scale})`;
        } else {
            // Reset the scale and remove 'focused' class if the card is not in focus
            card.style.transform = 'scale(1)';
        }
    });
}, options);

// Observe each card
cards.forEach(card => observer.observe(card));

// You can add additional logic here for other scroll-related events
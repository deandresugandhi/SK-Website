// Adjust elements on the home page based on scrolling position
const logo = document.querySelector('.skicon');
const hamburgerIcon = document.querySelector('.hamburgericon');
const introParagraph = document.querySelector('#introduction-container p');
const introLearnMore = document.querySelector('#introduction-container h2:nth-of-type(2)');

window.addEventListener('scroll', function () {
    const viewportHeight = window.innerHeight;
    const scrollThresholdPercentage = 50;
    const scrollThreshold = (scrollThresholdPercentage / 100) * viewportHeight;
    const scrollThresholdPercentage2 = 95;
    const scrollThreshold2 = (scrollThresholdPercentage2 / 100) * viewportHeight;
   
    if (window.scrollY > scrollThreshold) {
        logo.classList.add('hidden');
    } else {
        logo.classList.remove('hidden');
    }

    if (window.scrollY > scrollThreshold2) {
        hamburgerIcon.classList.add('addbackground');
    } else {
        hamburgerIcon.classList.remove('addbackground');
    }
});

// Set card behaviour in scroll container based on what card is in focus in the viewport
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

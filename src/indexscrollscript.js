// Adjust elements on the home page based on scrolling position
const logo = document.querySelector('.skicon');
const hamburgerIcon = document.querySelector('.hamburgericon');
const introParagraph = document.querySelector('#introduction-container p');
const introLearnMore = document.querySelector('#introduction-container a h2');

window.addEventListener('scroll', function () {
    const viewportHeight = window.innerHeight;
    const scrollThresholdPercentage = 50;
    const scrollThreshold = (scrollThresholdPercentage / 100) * viewportHeight;
    const scrollThresholdPercentage2 = 95;
    const scrollThreshold2 = (scrollThresholdPercentage2 / 100) * viewportHeight;
    const scrollThresholdPercentage3 = 80;
    const scrollThreshold3 = (scrollThresholdPercentage3 / 100) * viewportHeight;
    
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

    if (window.scrollY < scrollThreshold3) {
        introParagraph.classList.add('hidden');
        introLearnMore.classList.add('hidden');
    } else {
        introParagraph.classList.remove('hidden');
        introLearnMore.classList.remove('hidden');
    }
});

const targetElement = document.querySelector('#social_media');
const changeElements = document.querySelectorAll('#contact-us > *:not(:first-child)');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            changeElements.forEach(element => element.classList.remove('hidden'));
        } else {
            changeElements.forEach(element => element.classList.add('hidden'));
        }
    });
}, options);

observer.observe(targetElement);
document.querySelectorAll('a[href^="."]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetClassName = this.getAttribute('href').substring(1);
        const targetElement = document.querySelector(`.${targetClassName}`);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

function scrollToContent(target) {
    const targetElement = document.querySelector(target);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error(`Element with selector '${target}' not found.`);
    }
}

const logo = document.querySelector('.skicon');
const hamburgerIcon = document.querySelector('.hamburgericon');

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
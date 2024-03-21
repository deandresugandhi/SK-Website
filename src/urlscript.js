// Update URL based on current scroll position
document.addEventListener('DOMContentLoaded', function () {
    // Debounce function
    function debounce(func, delay) {
        let timeoutId;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }

    // Function to update the URL based on the active section
    function updateUrl() {
        console.log('Updating URL...');
        const activeSection = getActiveSection();
        console.log('Active Section:', activeSection);

        const currentUrl = window.location.href;
        const baseUrl = currentUrl.split('#')[0];

        if (activeSection) {
            const newUrl = `${baseUrl}#${activeSection}`;
            console.log('New URL:', newUrl);
            history.replaceState(null, null, newUrl);
        }
    }

    // Function to get the current active section based on scroll position
    function getActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        console.log('Scroll Position:', scrollPosition);

        for (const section of sections) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            console.log(`Section: ${section.id}, Top: ${sectionTop}, Bottom: ${sectionBottom}`);

            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                return section.id;
            }
        }

        return '';
    }

    // Run debounced function to update the URL on scroll
    const debouncedUpdateUrl = debounce(updateUrl, 200);

    // Listen to the scroll event and update the URL (debounced)
    document.addEventListener('scroll', debouncedUpdateUrl);

    // Initialize URL update
    updateUrl();
});

// Link configuration for external and scrolling links
function scrollToContent(target) {
    const hashIndex = target.indexOf('#');

    if (hashIndex !== -1) {
        const targetId = target.slice(hashIndex + 1);

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Scroll to the target element within the current page
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.error(`Element with id '${targetId}' not found.`);
        }
    } else {
        console.error(`Invalid href format: '${target}'.`);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href && href.startsWith('#')) {
                // Local link, prevent default behavior and scroll smoothly
                e.preventDefault();
                scrollToContent(href);
            } else if (href && href.includes('#')) {
                // External link with a hash, set hash as a parameter
                e.preventDefault();
                const [externalPage, sectionId] = href.split('#');
                window.location.href = `${externalPage}?scrollTo=${sectionId}`;
            }
        });
    });

    // Check if there's a hash parameter for scrolling
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToParam = urlParams.get('scrollTo');
    if (scrollToParam) {
        // Wait for a short time before scrolling to allow the URL to update
        setTimeout(() => {
            scrollToContent(`#${scrollToParam}`);
        
            // Remove the scrollTo parameter from the URL
            const newUrl = window.location.href.replace(/\?scrollTo=[^&]+/, '');
            history.replaceState({}, '', newUrl);
        }, 100);
    }
});

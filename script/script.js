document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');

            const isExpanded = nav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        const navLinks = document.querySelectorAll('.nav-list a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
            });
        });
        const scroller = document.getElementById('servicesScroller');
        const btnPrev = document.querySelector('.scroll-prev');
        const btnNext = document.querySelector('.scroll-next');

        if (scroller && btnPrev && btnNext) {
            const scrollAmount = 340;

            btnNext.addEventListener('click', () => {
                scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });

            btnPrev.addEventListener('click', () => {
                scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }

        const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');

        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealOnScroll.observe(el);
        });
        const testScroller = document.getElementById('testimonialsScroller');
        const btnPrevTest = document.querySelector('.prev-test');
        const btnNextTest = document.querySelector('.next-test');

        if (testScroller && btnPrevTest && btnNextTest) {
            btnNextTest.addEventListener('click', () => {
                const cardWidth = testScroller.querySelector('.test-card').offsetWidth;
                testScroller.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
            });

            btnPrevTest.addEventListener('click', () => {
                const cardWidth = testScroller.querySelector('.test-card').offsetWidth;
                testScroller.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' });
            });
        }
    }
});
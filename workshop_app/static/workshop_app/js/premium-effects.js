(function () {
    var prefersReducedMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    var isSmallScreen = !!(window.matchMedia && window.matchMedia('(max-width: 767px)').matches);

    var revealSelectors = [
        '.workshop-card',
        '.workshop-list-card',
        '.workshop-info-card',
        '.workshop-action-card',
        '.workshop-terms-card',
        '.workshop-comments-card',
        '.profile-card',
        '.profile-edit-card',
        '.auth-card',
        '.login-card',
        '.register-card',
        '.propose-shell',
        '.stats-summary-card',
        '.stats-chart-card',
        '.stats-table-card',
        '.stats-filter-panel',
        '.cms-category-card',
        '.cms-step-card',
        '.workshop-list-page__hero',
        '.workshop-details-hero',
        '.profile-hero',
        '.instructor-welcome-banner',
        '.instructor-stat-card',
        '.instructor-table-wrap',
        '.instructor-empty-state',
        '.coordinator-stat-card',
        '.coordinator-table-section',
        '.coordinator-empty-state',
        '.coordinator-empty-jumbo'
    ];

    var countSelectors = [
        '.workshop-list-page__count-value',
        '.cms-home-stats__item strong',
        '.stats-summary-card strong',
        '.instructor-stat-card strong',
        '.coordinator-stat-card strong'
    ];

    function countUp(element, target, duration) {
        if (duration <= 0) {
            element.textContent = String(target);
            return;
        }

        var start = 0;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) {
                startTime = timestamp;
            }

            var progress = Math.min((timestamp - startTime) / duration, 1);
            var value = Math.floor(start + (target - start) * progress);
            element.textContent = String(value);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = String(target);
            }
        }

        window.requestAnimationFrame(step);
    }

    function scheduleCountUp() {
        countSelectors.forEach(function (selector) {
            var elements = document.querySelectorAll(selector);
            elements.forEach(function (element) {
                if (element.dataset.counted === 'true') {
                    return;
                }

                var value = (element.textContent || '').replace(/,/g, '').trim();
                if (!/^\d+$/.test(value)) {
                    return;
                }

                element.dataset.counted = 'true';
                countUp(element, parseInt(value, 10), prefersReducedMotion ? 0 : (isSmallScreen ? 650 : 900));
            });
        });
    }

    function applyRevealClasses() {
        var items = document.querySelectorAll(revealSelectors.join(','));
        items.forEach(function (item) {
            item.classList.add('reveal');
            item.classList.add('fade-in-up');
        });
    }

    function observeReveal() {
        var items = document.querySelectorAll('.reveal, .fade-in-up');

        if (!items.length) {
            return;
        }

        if (prefersReducedMotion) {
            items.forEach(function (item) {
                item.classList.add('visible');
            });
            return;
        }

        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -8% 0px'
            });

            items.forEach(function (item) {
                observer.observe(item);
            });
            return;
        }

        function revealOnScroll() {
            items.forEach(function (item) {
                if (item.classList.contains('visible')) {
                    return;
                }

                var rect = item.getBoundingClientRect();
                var threshold = window.innerHeight * 0.9;
                if (rect.top < threshold) {
                    item.classList.add('visible');
                }
            });
        }

        revealOnScroll();
        window.addEventListener('scroll', revealOnScroll, { passive: true });
        window.addEventListener('resize', revealOnScroll);
    }

    function init() {
        applyRevealClasses();
        observeReveal();
        scheduleCountUp();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
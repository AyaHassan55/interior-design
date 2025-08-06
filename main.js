
const counters = document.querySelectorAll('.counter');
let started = false;

function animateCounters() {
    if (!started && isInViewport(document.getElementById('stats'))) {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;

            const increment = target / 100;

            const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };

        updateCounter();
        });

        started = true;
    }
}

 
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && rect.bottom >= 0
    );
}

  // Trigger on scroll
window.addEventListener('scroll', animateCounters);


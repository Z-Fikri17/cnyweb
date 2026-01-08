        const ssViewAnimate = function() {
            const blocks = document.querySelectorAll("[data-animate-block]");
            
            function viewportAnimation() {
                let scrollY = window.pageYOffset;
                
                blocks.forEach(function(current) {
                    const viewportHeight = window.innerHeight;
                    const triggerTop = (current.offsetTop + (viewportHeight * 0.1)) - viewportHeight;
                    const blockHeight = current.offsetHeight;
                    const blockSpace = triggerTop + blockHeight;
                    const inView = scrollY > triggerTop && scrollY <= blockSpace;
                    const isAnimated = current.classList.contains("ss-animated");
                    
                    if (inView && !isAnimated) {
                        anime({
                            targets: current.querySelectorAll("[data-animate-el]"),
                            opacity: [0, 1],
                            translateY: [100, 0],
                            delay: anime.stagger(400, {start: 200}),
                            duration: 1000,
                            easing: 'easeInOutCubic',
                            begin: function(anim) {
                                current.classList.add("ss-animated");
                            }
                        });
                    }
                });
            }
            
            window.addEventListener("scroll", viewportAnimation);
            viewportAnimation(); // Check on load
        };

        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', ssViewAnimate);
        } else {
            ssViewAnimate();
        }

  /************************************************** */

    
        function handleClick() {
            alert('Button clicked! Add your link or action here.');
        }

            /************************************************** */

                    document.querySelectorAll('.buy-button').forEach(button => {
            button.addEventListener('click', function() {
                const productName = this.parentElement.querySelector('h3').textContent;
                alert(`🎊 ${productName} added to cart! 恭喜發財!`);
            });
        });

                    /************************************************** */

       function handleClick() {
            alert('Learn more about our services!');
        }
  /************************************************** */
const slider = document.getElementById("productSlider");
const cards = document.querySelectorAll(".carousel-item");
let index = 0;
let timer;

// Calculate how much to scroll to center a specific card
function centerCard(idx) {
    const card = cards[idx];
    const sliderRect = slider.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    
    // Current scroll position
    const currentScroll = slider.scrollLeft;
    
    // Calculate card's current position relative to slider
    const cardLeftRelativeToSlider = cardRect.left - sliderRect.left;
    
    // Calculate how much to adjust scroll to center the card
    const sliderCenter = sliderRect.width / 2;
    const cardCenter = cardRect.width / 2;
    const scrollAdjustment = cardLeftRelativeToSlider + cardCenter - sliderCenter;
    
    slider.scrollTo({
        left: currentScroll + scrollAdjustment,
        behavior: "smooth"
    });
    
    index = idx;
}

// Next slide
function nextSlide() {
    index = (index + 1) % cards.length;
    centerCard(index);
}

// Previous slide
function previousSlide() {
    index = (index - 1 + cards.length) % cards.length;
    centerCard(index);
}

// Go to slide via indicator
function goToSlide(i) {
    centerCard(i);
    stopAutoTemporary();
}

// Auto-slide functions
function startAuto() {
    timer = setInterval(nextSlide, 4000);
}

function stopAutoTemporary() {
    clearInterval(timer);
    setTimeout(startAuto, 3000);
}

// Initial setup
setTimeout(() => {
    centerCard(0);
    startAuto();
}, 100);

// Pause auto on hover
slider.addEventListener("mouseenter", () => clearInterval(timer));
slider.addEventListener("mouseleave", startAuto);

// Recalculate on resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => centerCard(index), 150);
});
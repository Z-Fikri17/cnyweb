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

  const slider = document.getElementById("productSlider");
  const slideAmount = 300; // px per click

  function slideLeft() {
    slider.scrollLeft -= slideAmount;
  }

  function slideRight() {
    slider.scrollLeft += slideAmount;
  }

    /************************************************** */

    

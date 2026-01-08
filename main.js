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

        function slideLeft() {
            const slider = document.getElementById('productSlider');
            slider.scrollBy({ left: -300, behavior: 'smooth' });
        }

        function slideRight() {
            const slider = document.getElementById('productSlider');
            slider.scrollBy({ left: 300, behavior: 'smooth' });
        }

        function handleClick() {
            alert('Learn more clicked!');
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
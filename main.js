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
const indicators = document.querySelectorAll("#indicators button");

const gap = 20;
let timer;

// ORIGINAL slides
const originals = Array.from(slider.children);
const total = originals.length;

// ---- CLONE ALL SLIDES TO THE RIGHT (ONLY) ----
originals.forEach(card => {
  slider.appendChild(card.cloneNode(true));
});

// Card width
const cardWidth = originals[0].offsetWidth + gap;

// Start at first slide
let index = 0;
slider.scrollLeft = 0;

// ---- INDICATORS ----
function updateIndicators() {
  const realIndex = index % total;
  indicators.forEach((dot, i) => {
    dot.classList.toggle("bg-white", i === realIndex);
    dot.classList.toggle("bg-white/50", i !== realIndex);
  });
}

// ---- FORWARD ONLY NEXT ----
function nextSlide() {
  index++;

  // When reaching end of cloned set → TELEPORT FORWARD
  if (index >= total * 2) {
    index = total;
    slider.scrollLeft = index * cardWidth;
  }

  slider.scrollTo({
    left: index * cardWidth,
    behavior: "smooth",
  });

  updateIndicators();
}

// ---- PREVIOUS (OPTIONAL, STILL FORWARD SAFE) ----
function previousSlide() {
  index--;

  if (index < 0) {
    index = total - 1;
    slider.scrollLeft = index * cardWidth;
  }

  slider.scrollTo({
    left: index * cardWidth,
    behavior: "smooth",
  });

  updateIndicators();
}

// ---- INDICATOR CLICK ----
function goToSlide(i) {
  index = i;
  slider.scrollTo({
    left: index * cardWidth,
    behavior: "smooth",
  });
  updateIndicators();
  resetAuto();
}

// ---- AUTO SLIDE ----
function startAuto() {
  timer = setInterval(nextSlide, 2000);
}

function resetAuto() {
  clearInterval(timer);
  startAuto();
}

slider.addEventListener("mouseenter", () => clearInterval(timer));
slider.addEventListener("mouseleave", startAuto);

// INIT
updateIndicators();
startAuto();
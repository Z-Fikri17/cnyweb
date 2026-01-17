/*** NAVBAR */    

// main.js — manages everything for your site

document.addEventListener("DOMContentLoaded", () => {
  const navbarEl = document.getElementById("navbar");
  if (!navbarEl) return; // skip if no placeholder

  fetch("navbar.html") // adjust path if needed
    .then(res => {
      if (!res.ok) throw new Error("Navbar fetch failed");
      return res.text();
    })
    .then(html => {
      navbarEl.innerHTML = html;

      // optional: highlight current page
      navbarEl.querySelectorAll("a").forEach(a => {
        if (a.pathname === location.pathname) {
          a.style.textDecoration = "underline";
          a.style.fontWeight = "bold";
        }
      });
    })
    .catch(err => console.error("Navbar error:", err));
});


/***** */
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

/****** */
/* ==========================
   PRODUCT DATA (ONE SOURCE)
========================== */
function productsApp() {
  return {
    products: [
      {
        id: 1,
        name: "Luxury Set 1",
        price: "RM250",
        image: "materials/hamper2.png",
        details: ["Detail 1", "Detail 2", "Detail 3", "Detail 4"],
        stock: 10,
        sold: 2
      },
      {
        id: 2,
        name: "Premium Set 2",
        price: "RM180",
        image: "materials/hamper2.png",
        details: ["Detail A", "Detail B", "Detail C", "Detail D"],
        stock: 15,
        sold: 5
      },
      {
        id: 3,
        name: "Deluxe Set 3",
        price: "RM300",
        image: "materials/hamper2.png",
        details: ["Detail X", "Detail Y", "Detail Z"],
        stock: 5,
        sold: 1
      }
    ],
    product: null,
    init() {
      const params = new URLSearchParams(window.location.search);
      const id = parseInt(params.get("id"));
      this.product = this.products.find(p => p.id === id) || this.products[0];
      
      // Initialize checkout after Alpine renders
      this.$nextTick(() => {
        this.initCheckout();
        this.initZoom();
      });
    },

        // ✅ Open prefilled Google Form
    openPrefilledForm(productName, price) {
      const FORM_ID = '1FAIpQLScUncZJlvq3tOkd5liRInFhWoC8V1NQoOQuzXx3PiHUMp_xcg';
      const ORDER_ENTRY_ID = '1314933134';
      const encoded = encodeURIComponent(`${productName} - ${price}`);
      const url = `https://docs.google.com/forms/d/e/${FORM_ID}/viewform?entry.${ORDER_ENTRY_ID}=${encoded}`;
      window.open(url, '_blank'); // 🔹 Must open in new tab for prefill
    },

    initCheckout() {
      const checkoutBtn = document.getElementById('checkoutBtn');
      const modal = document.getElementById('customerModal');
      const closeModal = document.getElementById('closeModal');
      
      if (!checkoutBtn || !modal || !closeModal) {
        console.error('Elements not found yet');
        return;
      }
      
      const HITPAY_BASE_URL = 'https://securecheckout.sandbox.hit-pay.com/payment-request/@megah-holding';
      
      checkoutBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
      });
      
      closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
      });
      
      const form = document.getElementById('customerForm');
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const address = formData.get('address');
        
        const notes = `Name: ${name}\nPhone: ${phone}\nAddress: ${address}`;
        const encodedNotes = encodeURIComponent(notes);
        const finalURL = HITPAY_BASE_URL + `?notes=${encodedNotes}`;
        
        window.open(finalURL, '_blank');
        modal.classList.add('hidden');
      });
    },
    initZoom() {
      setTimeout(() => {
        const gallery = document.querySelector('.flex.gap-4');
        const container = gallery?.children[1];
        const img = container?.querySelector('img');
        
        if (container && img) {
          container.addEventListener('mousemove', e => {
            const rect = container.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            img.style.transformOrigin = `${x}% ${y}%`;
            img.style.transform = 'scale(2)';
          });
          
          container.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            img.style.transformOrigin = 'center';
          });
        }
      }, 200);
    }
  }
}

/**** Navbar ****/
fetch("navbar.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("navbar").innerHTML = html;
  });                   



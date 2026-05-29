// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";

    } else {

        navbar.style.background = "rgba(255,255,255,0.85)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";

    }

});

// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {

            link.classList.add("active");

        }

    });

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

ScrollReveal().reveal(

'.hero-text',

{
    distance: '80px',
    duration: 1500,
    origin: 'left',
    reset: false
}

);

ScrollReveal().reveal(

'.glass-card',

{
    distance: '80px',
    duration: 1500,
    origin: 'right',
    delay: 300,
    reset: false
}

);

ScrollReveal().reveal(

'.about-card, .problem-card, .security-card',

{
    distance: '60px',
    duration: 1200,
    interval: 150,
    origin: 'bottom',
    reset: false
}

);

ScrollReveal().reveal(

'.gallery-item',

{
    distance: '50px',
    duration: 1200,
    interval: 100,
    origin: 'bottom',
    reset: false
}

);

ScrollReveal().reveal(

'.impact-card',

{
    distance: '50px',
    duration: 1200,
    interval: 200,
    origin: 'bottom',
    reset: false
}

);

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".impact-card h1");

const speed = 100;

counters.forEach(counter => {

    const updateCount = () => {

        const targetText = counter.innerText;

        if (targetText.includes("%")) {

            const target = parseInt(targetText);

            let count = 0;

            const increment = target / speed;

            const interval = setInterval(() => {

                count += increment;

                if (count >= target) {

                    counter.innerText = target + "%";

                    clearInterval(interval);

                } else {

                    counter.innerText =
                    Math.floor(count) + "%";

                }

            }, 15);

        }

    };

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    updateCount();

                }

            });

        }

    );

    observer.observe(counter);

});

// =========================
// GALLERY HOVER EFFECT
// =========================

const galleryItems =
document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform =
        "translateY(-10px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform =
        "translateY(0px)";

    });

});

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click",

    function (e) {

        e.preventDefault();

        document
        .querySelector(
            this.getAttribute("href")
        )
        .scrollIntoView({

            behavior: "smooth"

        });

    });

});

// =========================
// TYPEWRITER EFFECT HERO
// =========================

const title = document.querySelector(".hero-text h1");

const text =
"Securing Digital Cooperative Services For Better Communities";

let index = 0;

title.innerHTML = "";

function typeWriter() {

    if (index < text.length) {

        title.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    }

}

window.addEventListener("load", () => {

    setTimeout(typeWriter, 500);

});

// =========================
// PARALLAX HERO
// =========================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    let scrollPosition = window.pageYOffset;

    hero.style.backgroundPositionY =
    scrollPosition * 0.5 + "px";

});

// =========================
// LOADING ANIMATION
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log(
"KoopCare Portfolio Loaded Successfully"
);
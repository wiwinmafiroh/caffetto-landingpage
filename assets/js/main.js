// ======================================== CHANGE BACKGROUND HEADER =======================
const scrollHeader = () => {
  const header = document.getElementById("header");

  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

// ======================================== SHOW SCROLL UP =================================
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

// ======================================== SCROLL SECTIONS ACTIVE LINK ====================
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((curr) => {
    const sectionHeight = curr.offsetHeight,
      sectionTop = curr.offsetTop - 58,
      sectionId = curr.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (sectionClass) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionClass.classList.add("active-link");
      } else {
        sectionClass.classList.remove("active-link");
      }
    }
  });
};

window.addEventListener("scroll", scrollActive);

// ======================================== SCROLL REVEAL ANIMATION ========================
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true, // Animations repeat
});

sr.reveal(`.home-data, .products-data, .steps-content, .footer-container`);
sr.reveal(`.home-img`, { origin: "bottom" });
sr.reveal(`.products-card`, { interval: 100 });
sr.reveal(`.about-img, .testimonial-img`, { origin: "right" });
sr.reveal(`.about-data, .testimonial-data`, { origin: "left" });

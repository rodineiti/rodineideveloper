const header = document.querySelector("#header");
const nav = document.querySelector("#header nav");

function toggleMenuAndLinks() {
  const toggle = document.querySelectorAll("nav .toggle");
  toggle.forEach((icon) => {
    icon.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  });

  const links = document.querySelectorAll("nav ul li a");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      nav.classList.remove("show");
    });
  });
}

function scrollHeader() {
  // change header page when scroll
  const navHeight = header.offsetHeight;
  // if scrollY is big or equal navHeight
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

const sections = document.querySelectorAll("main section[id]");
function activeMenuAtCurrentSection() {
  const checkPoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (let section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const start = checkPoint >= sectionTop;
    const end = checkPoint <= sectionTop + sectionHeight;

    if (start && end) {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.remove("active");
    }
  }
}

/** Feather icons */
feather.replace();

/** Swiper slides */
new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: SVGComponentTransferFunctionElement,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

/** Scroll reveal */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `
  #home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #portfolios header, #portfolios .portfolios,
  #contact .text, #contact .links,
  footer .brand, footer .social
`,
  { interval: 100 }
);

window.addEventListener("scroll", function () {
  scrollHeader();
  backToTop();
  activeMenuAtCurrentSection();
});

toggleMenuAndLinks();

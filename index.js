let slide = 1;
let text = {
  1: {
    headingText: "Discover innovative ways to decorate",
    descText:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  2: {
    headingText: "We are available all across the globe",
    descText:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughtout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  3: {
    headingText: "Manufacture with the best materials",
    descText:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
};

const image = document.querySelector(".product__image");
const mobile = document.querySelector(".product__image--mobile");
const heading = document.querySelector(".product__text--heading");
const desc = document.querySelector(".product__text--desc");

// EVENT LISTENERS
document.querySelector(".dir-buttons--right").addEventListener("click", () => {
  changeImageRight();
});

document.querySelector(".dir-buttons--left").addEventListener("click", () => {
  changeImageLeft();
});

document
  .querySelector(".dir-buttons--right--mobile")
  .addEventListener("click", () => {
    changeMobileRight();
  });

document
  .querySelector(".dir-buttons--left--mobile")
  .addEventListener("click", () => {
    changeMobileLeft();
  });

document.querySelector(".nav__hamburger").addEventListener("click", () => {
  openMenu();
});

// FUNCTIONS
function changeImageRight() {
  if (slide < 3) {
    slide++;
  } else if (slide === 3) {
    slide = 1;
  }

  image.src = `images/desktop-image-hero-${slide}.jpg`;

  slideText();
}

function changeImageLeft() {
  if (slide > 1) {
    slide--;
  } else if (slide === 1) {
    slide = 3;
  }

  image.src = `images/desktop-image-hero-${slide}.jpg`;

  slideText();
}
function changeMobileRight() {
  if (slide < 3) {
    slide++;
  } else if (slide === 3) {
    slide = 1;
  }

  mobile.src = `images/mobile-image-hero-${slide}.jpg`;

  slideText();
}

function changeMobileLeft() {
  if (slide > 1) {
    slide--;
  } else if (slide === 1) {
    slide = 3;
  }

  mobile.src = `images/mobile-image-hero-${slide}.jpg`;

  slideText();
}

function slideText() {
  heading.textContent = text[slide].headingText;
  desc.textContent = text[slide].descText;
}

function openMenu() {
  const menu = document.querySelector(".nav__menu");

  menu.style.display = "flex";
}

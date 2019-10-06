import createElement from "../../lib/createElement.js";

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const container = document.querySelector(".carousel-container");

const { div, img } = createElement();

function Carousel() {
  return div({ class: "carousel" }, [
    div({ class: "left-button" }, " < "),
    img({ class: "carousel-image", src: "./assets/carousel/mountains.jpeg" }),
    img({ class: "carousel-image", src: "./assets/carousel/computer.jpeg" }),
    img({ class: "carousel-image", src: "./assets/carousel/trees.jpeg" }),
    img({ class: "carousel-image", src: "./assets/carousel/turntable.jpeg" }),
    div({ class: "right-button" }, " > ")
  ]);
}

const c = Carousel();
container.appendChild(c);

const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");

let currentIndex = 0;
images[0].classList.add("current");

carousel.addEventListener("click", e => {
  images.forEach((img, i) => {
    img.classList.remove("current");
  });
  if (e.target.className === "right-button") {
    ++currentIndex;
    images.forEach((img, i) => {
      img.style.transform = `translateX(${100 * -currentIndex}%)`;
    });
    if (currentIndex >= images.length-1) {
      currentIndex = -1
    }
  } else {
    --currentIndex
    if (currentIndex < 0) {
      currentIndex = 0
    }
    images.forEach(img => {
      img.style.transform = `translateX(${(100 * -currentIndex)}%)`;
    });
  }
});

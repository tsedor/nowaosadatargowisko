(function () {
  document.addEventListener("DOMContentLoaded", init);

  let id = 101;
  let sliderInterval;

  function init() {
    sliderInterval = setInterval(slider, 5000);
    document.querySelector(".carousel").addEventListener("mouseover", showArrows);
    document.querySelector(".carousel").addEventListener("mouseout", hideArrows);
    document.querySelector(".left-arrow").addEventListener("click", previousSlide);
    document.querySelector(".right-arrow").addEventListener("click", nextSlide);
    document.querySelector(".close").addEventListener("click", closeModal);
    document.querySelector(".fog").addEventListener("click", closeModal);
    const plans = document.querySelector(".plans").querySelectorAll("img");
    plans.forEach(v => v.addEventListener("click", showModal))
  }

  function showModal(event) {
    document.querySelector(".modal").querySelector("img").src = event.path[0].src
    document.querySelector(".fog").classList.value = "fog";
  }

  function closeModal() {
    document.querySelector(".fog").classList.add("fog-hide");
    setTimeout(() => document.querySelector(".fog").classList.add("fog-destroy"), 600)
  }

  function nextSlide() {
    clearInterval(sliderInterval);
    slider();
    sliderInterval = setInterval(slider, 5000);
  }

  function previousSlide() {
    clearInterval(sliderInterval);
    id = id - 2;
    slider();
    sliderInterval = setInterval(slider, 5000);
  }

  function slider() {
    document.querySelector(".carousel").addEventListener("mouseover", showArrows);
    id++;
    const imgList = [document.querySelector("#image1"), document.querySelector("#image2"), document.querySelector("#image3")];

    const modulo = (id % 3);

    for (let i = 0; i < 3; i++) {
      i === modulo ? imgList[i].classList.value = `image${i+1} active` : imgList[i].classList.value = `image${i+1}`;
    }

    nextCard();
  }

  function nextCard() {
    const cards = [document.querySelector("#card1"), document.querySelector("#card2"), document.querySelector("#card3")];

    const modulo = id % 3;

    for (let i = 0; i < 3; i++) {
      i === modulo ? cards[i].classList.value = `card${i+1} active-card` : cards[i].classList.value = `card${i+1}`;
    }
  }

  function showArrows() {
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    leftArrow.classList.value = "left-arrow left-arrow-show";
    rightArrow.classList.value = "right-arrow right-arrow-show";
  }

  function hideArrows() {
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    leftArrow.classList.value = "left-arrow";
    rightArrow.classList.value = "right-arrow";
  }
})();
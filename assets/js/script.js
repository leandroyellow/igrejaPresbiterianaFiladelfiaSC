let qtdSlider = document.querySelectorAll('.banner .slider').length;
let currentSlide = 0;

document.querySelector('.banner .sliders').style.width = `calc(100vw * ${qtdSlider})`;
document.querySelector('.banner .slider-controls').style.height = `${document.querySelector('.banner').clientHeight}px`;

function prev() {
   currentSlide--;
   if (currentSlide < 0) {
      currentSlide = qtdSlider - 1;
   }
   updadeMargin();
}

function next() {
   currentSlide++;
   if (currentSlide > (qtdSlider - 1)) {
      currentSlide = 0;
   }
   updadeMargin();
}

function updadeMargin() {
   let sliderItemWidth = document.querySelector('.banner .slider').clientWidth;
   let newMargin = (currentSlide * sliderItemWidth);
   document.querySelector('.banner .sliders').style.marginLeft = `-${newMargin}px`;
}

setInterval(next, 6000);
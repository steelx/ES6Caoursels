'use strict';
import $ from 'jquery';

class Carousel {
  constructor() {
    console.log('Carousel module');

    this.carousel = $('#carousel');
    this.ul = this.carousel.find('ul');
    this.li = this.ul.find('li');
    this.slidesCount = this.li.length;
    this.slideWidth = 300;
    this.currentImage = 0;
    this.controls = this.carousel.find('.controls');
    this.controlsSpan = this.controls.find('span');
    this.controlsLeft = this.controls.find('a.left');
    this.controlsRight = this.controls.find('a.right');

    //init
    this.setUlWidth();
    this.registerEvents();
    this.timer();
  }

  timer() {
    this.slideInterval = window.setInterval(() => {
      this.slideLeft();
    }, 2000);
  }

  displayCount(){
    this.controlsSpan.text("Current: " + (this.currentImage % this.slidesCount + 1));
  }

  setUlWidth(){
    this.ul.css('width', this.slidesCount * this.slideWidth);
  }

  slideLeft(){
    window.clearTimeout(this.slideInterval);
    if(this.currentImage === this.slidesCount - 1) {
      this.ul.animate({
        "margin-left": 0
      }, () => {
        this.currentImage = 0;
        this.displayCount();
      });
    } else {
      this.ul.animate({
        "margin-left": (this.currentImage % this.slidesCount + 1) * -300
      }, () => {
        this.currentImage+=1;
        this.displayCount();
      });
    }

    this.timer();
  }

  slideRight(){
    window.clearTimeout(this.slideInterval);
    if(this.currentImage === 0) {
      this.ul.animate({
        "margin-left":  (this.slidesCount - 1) * -300
      }, () => {
        this.currentImage = 0;
        this.displayCount();
      });
    } else {
      this.ul.animate({
        "margin-left": "+=300px"
      }, () => {
        this.currentImage += 1;
        this.displayCount();
      });
    }
    this.timer();
  }

  registerEvents() {
    this.controlsLeft.on('click', (event) => {
      event.preventDefault();
      this.slideLeft();
    });

    this.controlsRight.on('click', (event) => {
      event.preventDefault();
      this.slideRight();
    });
  }



}

export default Carousel;


// $(function() {
//
//
//   var timeout = setTimeout(function() {
//     $(".left").trigger("click");
//   }, 10000);
//
//   var currentImage = 0;
//   $(".left").click(function() {
//     clearTimeout(timeout);
//     if(currentImage == $("li").length - 1) {
//       $("ul").animate({
//         "margin-left": 0
//       }, function() {
//         currentImage = 0;
//         $(".controls span").text("Current: " + (currentImage + 1));
//       });
//     } else {
//       $("ul").animate({
//         "margin-left": "-=300px"
//       }, function() {
//         currentImage+=1;
//         $(".controls span").text("Current: " + (currentImage + 1));
//       });
//     }
//     timeout = setTimeout(function() {
//       $(".left").trigger("click");
//     }, 10000);
//     return false;
//   });
//
//   $(".right").click(function() {
//     clearTimeout(timeout);
//     if(currentImage === 0) {
//       $("ul").animate({
//         "margin-left": ($("li").length - 1) * -300
//       }, function() {
//         currentImage = $("li").length - 1;
//         $(".controls span").text("Current: " + (currentImage + 1));
//       });
//     } else {
//       $("ul").animate({
//         "margin-left": "+=300px"
//       }, function() {
//         currentImage-=1;
//         $(".controls span").text("Current: " + (currentImage + 1));
//       });
//     }
//     timeout = setTimeout(function() {
//       $(".left").trigger("click");
//     }, 10000);
//     return false;
//   });
// });

import { Component } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-swiperitems',
  templateUrl: './swiperitems.component.html',
  styleUrls: ['./swiperitems.component.scss']
})
export class SwiperitemsComponent {


  ngAfterViewInit(): void {
    const swiper = new Swiper('.mySwiperitems', {
      slidesPerView: 1.2,
      spaceBetween: 10,
      autoplay : true ,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      on: {
        init: function () {
          swiper.setTranslate(0);
        },
      },
    });
  }
}

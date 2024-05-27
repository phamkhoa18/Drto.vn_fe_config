import { Component, Input, ViewEncapsulation } from '@angular/core';
import { formatInTimeZone } from 'date-fns-tz';
import { ApiService } from 'src/app/services/api.service';
import Swiper from 'swiper';
@Component({
  selector: 'app-swipercategory',
  templateUrl: './swipercategory.component.html',
  styleUrls: ['./swipercategory.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // hoặc ViewEncapsulation.ShadowDom
})
export class SwipercategoryComponent {

  titleSwiper: String = 'mySwiper' ;
  titleSwiperClass : String = '';

  @Input() id!: string;
  listcategory : any ;
  onedetail : any ;
  onenewfeed: any ;
  listnew : any = [];

  constructor(public api : ApiService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.id) {
      this.getDetail(this.id, 6, 1, false) ;
    } else {
      console.error('Missing id!');
    }
    this.titleSwiperClass = this.titleSwiper + '-' + Math.random().toString(36).substring(2, 15);
    this.runSwiperSettings(this.titleSwiperClass);
  }

  ngAfterViewInit(): void {
    this.runSwiperSettings(this.titleSwiperClass);
  }

  runSwiperSettings(titleClass: any ) {
    const swiper = new Swiper('.'+titleClass, {
      slidesPerView: 2.2,
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
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
          slidesPerView: 3.2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4.2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4.2,
          spaceBetween: 10,
        },
      },
      on: {
        init: function () {
          swiper.setTranslate(0);
        },
      },
    });
  }

  generateDescription(html: string): string {
    // Remove HTML tags
    const plainText = html.replace(/<[^>]+>/g, '');
    // Trim to a certain length
    const maxLength = 650;
    return plainText.length > maxLength ? plainText.substr(0, maxLength - 3) + '...' : plainText;
  }

  getDatePublicPost(publish_date: any ) {
    const timeZone = 'Asia/Ho_Chi_Minh';
    return  formatInTimeZone(publish_date, timeZone, 'dd/MM/yyyy HH:mm');
  }


  async getDetail(idCategory: any , limit : any , page: any , pushitem: boolean) {
    (await this.api.get('/get_category_new/' + idCategory + '/' + limit + '/' + page)).subscribe((v : any ) => {
      this.onedetail = v.title ;
      this.listnew = v.data ;
    })
  }


}

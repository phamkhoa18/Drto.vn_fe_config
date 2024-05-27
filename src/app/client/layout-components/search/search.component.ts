import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { formatInTimeZone } from 'date-fns-tz';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() id!: string;
  onedetail : any = '';
  page: any = 1 ;
  isLoading: boolean = false ;

  constructor(public api : ApiService , private route: ActivatedRoute,
    private viewportScroller : ViewportScroller , private titleService : Title , public data : DataService,
    private router : Router,
    private title :Title
  ) {
    this.isShowSubscription = this.data.isShow$.subscribe(isShow => {
      this.isShow = isShow;
      console.log(this.isShow);
    });
  }

  myName : any ;
  listnew :any = [] ;
  isShow: boolean = false;
  private isShowSubscription!: Subscription;

  ngOnDestroy() {
    this.isShowSubscription.unsubscribe();
  }

  async ngOnInit(): Promise<any>  {
    this.viewportScroller.scrollToPosition([0, 0]);
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    await this.queryparams();
  }

  queryparams() {
    this.route.paramMap.subscribe((params: Params) => {
      var myId = params['get']('name');
      // xử lý giá trị trước khi trả dữ liệu về
      this.myName = myId.split('-').join(' ') ;
      // set giá trị tìm kiếm trong background
      this.getData(6,this.page, false);
    });
  }

  handleSearch(value : String) {
    // String to Array
    var array = value.split(' ').filter((e : any) => {
      return e != '' ;
    });
    var processed = array.join('-');
    return processed ;
  }

  search() {
    // trước khi gửi đi cần xử lý giá trị tìm kiếm
    this.router.navigate(['/tim-kiem/' + this.handleSearch(this.myName)]);
  }
  async getData(limit : any , page: any , pushitem :boolean ) {
    (await this.api.get('/search/' + limit + '/' + page + '/' + this.myName)).subscribe((v : any) => {
        this.title.setTitle( "Tìm kiếm: " + this.myName + ' - Nhà Sử Học Việt Nam');
        if(pushitem) {
            this.listnew.push(...v.data);
        } else {
          this.listnew = v.data ;
        }
    })
  }


  nextpage() {
    this.page = this.page + 1 ;
    this.getData(6, this.page , true);
  }

  getDatePublicPost(publish_date: any ) {
    const timeZone = 'Asia/Ho_Chi_Minh';
    return  formatInTimeZone(publish_date, timeZone, 'dd/MM/yyyy HH:mm');
  }


  generateDescription(html: string): string {
      // Kiểm tra nếu html không phải là chuỗi
      if (typeof html !== 'string') {
        console.error('Input is not a string');
        return '';
    }
    try {
        // Xóa các thẻ HTML
        const plainText = html.replace(/<[^>]+>/g, '');

        // Giới hạn độ dài của chuỗi
        const maxLength = 650;
        return plainText.length > maxLength ? plainText.substr(0, maxLength - 3) + '...' : plainText;
    } catch (error) {
        console.error('Error while generating description:', error);
        return '';
    }
  }
}

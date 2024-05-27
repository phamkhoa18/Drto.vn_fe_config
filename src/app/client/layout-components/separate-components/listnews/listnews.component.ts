import { Component, Input } from '@angular/core';
import { formatInTimeZone } from 'date-fns-tz';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.scss']
})
export class ListnewsComponent {

  @Input() id!: string;
  onedetail : any = '';
  listnew : any ;
  page: any = 1 ;
  isLoading: boolean = false ;

  constructor(public api : ApiService) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.id != 'null') {
      this.getDetail(this.id, 6 , this.page, false) ;
    } else if(this.id = 'null') {
        this.getData(this.page , false) ;
    } else  {
      console.error('Missing id!');
    }
  }

  async getData(page: any , pushitem: boolean) {
    (await this.api.get('/list_new_news/' + 6 + '/' + page)).subscribe((v: any) => {
      this.isLoading = true;  // Bắt đầu loading
      if(pushitem) {
        // Sử dụng spread operator để thêm các phần tử mới vào mảng
        this.listnew.push(...v.data);
       } else {
         this.listnew = v.data ;
       }
       this.isLoading = false;  // Bắt đầu loading
    })
  }

  async getDetail(idCategory: any , limit : any , page: any , pushitem: boolean) {
    this.isLoading = true;  // Bắt đầu loading
    (await this.api.get('/get_category_new/' + idCategory + '/' + limit + '/' + page)).subscribe((v : any ) => {
      this.onedetail = v.title ;
      if(pushitem) {
       // Sử dụng spread operator để thêm các phần tử mới vào mảng
       this.listnew.push(...v.data);
      } else {
        this.listnew = v.data ;
      }
      this.isLoading = false;  // Bắt đầu loading
    })
  }

  nextpage() {
    this.page = this.page + 1 ;
    if (this.id != 'null') {
      this.getDetail(this.id, 6 , this.page, true) ;
    } else {
        this.getData(this.page , true) ;
    }
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

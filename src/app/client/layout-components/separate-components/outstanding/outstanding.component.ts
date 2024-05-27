import { Component, Input } from '@angular/core';
import { formatInTimeZone } from 'date-fns-tz';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-outstanding',
  templateUrl: './outstanding.component.html',
  styleUrls: ['./outstanding.component.scss']
})
export class OutstandingComponent {
  @Input() id!: string;
  listcategory : any ;
  onedetail : any ;
  onenewfeed: any ;
  listnew : any ;
  page : any = 1 ;

  constructor(public api : ApiService) {
    if (this.id) {
      this.getDetail(this.id, 4) ;
    } else if(this.id = 'null'){
      this.getData(this.page) ;
    } else {
      console.error('Missing id!');
    }
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


  async getData(page : any ) {
    (await this.api.get('/list_new_news/' + 4 + '/' + page)).subscribe((v: any) => {
        this.listcategory = v.data ;
        this.onenewfeed = this.listcategory.splice(0,1);
    })
  }

  async getDetail(idCategory: any , limit : any ) {
    (await this.api.get('/get_category_new/' + idCategory + '/' + limit)).subscribe((v : any ) => {
      this.onedetail = v.title ;
      this.listnew = v.data ;
    })
  }
}

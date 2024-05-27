import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { formatInTimeZone } from 'date-fns-tz';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  listdata : any = [] ;
  onenewfeed : any ;
  item : any ;
  numberpage : Number = 1 ;
  isLoading : boolean = true ;
  isShow: boolean = false;
  isAds : String = '' ;
  myId: any = '' ;

  constructor(
    public api : ApiService,
    private route : ActivatedRoute ,
    private title : Title
  ) {
    this.route.paramMap.subscribe(params => {
      this.myId = params.get('name');
      this.item = '' ;
      this.isAds = '' ;
      this.getData(this.myId , 4)
    });
  }

  async getData(value : String, limit : any ) {
    (await this.api.get('/find_category_slug/' + value + '/' + limit)).subscribe((v : any) => {
        this.item = v.category ;
        this.listdata = v.listnew ;
        this.onenewfeed = this.listdata.splice(0,1);
        this.isAds = v.categoryads ;
        this.title.setTitle( this.item.name + ' - DRTO.VN')
        // this.data.setPagination(this.item._id) ;
        // this.data.setListnews({_id : this.item._id , pagenumber : this.numberpage});
        this.isLoading = false ;
    })
}

getDatePublicPost(publish_date: any ) {
  const timeZone = 'Asia/Ho_Chi_Minh';
  return  formatInTimeZone(publish_date, timeZone, 'dd/MM/yyyy HH:mm');
}

generateDescription(html: string): string {
  // Remove HTML tags
  const plainText = html.replace(/<[^>]+>/g, '');
  // Trim to a certain length
  const maxLength = 650;
  return plainText.length > maxLength ? plainText.substr(0, maxLength - 3) + '...' : plainText;
}
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isSearch : any = '' ;
  listmenu : any = [] ;
  isShow : boolean = false ;
  sticky : boolean = false ;
  isShowSubscription!: Subscription ;

  constructor (
    private dataService : DataService,
    private api : ApiService,
    private router : Router
  ) {
    this.getData() ;
  }

  public isBar : boolean = false ;

  ngOnInit() {
      window.addEventListener('scroll' , () => {
        this.Scroll() ;
    })

    this.isShowSubscription = this.dataService.isShow$.subscribe(isShow => {
      this.isShow = isShow;
    });
   }

  async getData() {
    (await this.api.get('/get_Menu')).subscribe((v) => {
        this.listmenu = v ;
    })
  }

  Scroll (){
    if(window.pageYOffset >= 150) {
      this.sticky = true ;
    }else {
      this.sticky = false ;
    }
  }

  searchmobile() {
    this.dataService.setHeaderBlock(true) ;
  }


  search() {
    // trước khi gửi đi cần xử lý giá trị tìm kiếm
    this.router.navigate(['/tim-kiem/' + this.handleSearch(this.isSearch)]);
    this.isSearch = '' ;
    this.dataService.toggleBars(false);
  }

  handleSearch(value : String) {
    // String to Array
    var array = value.split(' ').filter((e : any) => {
      return e != '' ;
    });
    var processed = array.join('-');
    return processed ;
  }

  sitebar() {
    this.isBar = true ;
    this.dataService.setMobileBlock(this.isBar) ;
  }

  toggle() {
    this.isShow =! this.isShow ;
    this.dataService.toggleBars(this.isShow);
  }

}

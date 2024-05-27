import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-sidebarmobile',
  templateUrl: './sidebarmobile.component.html',
  styleUrls: ['./sidebarmobile.component.scss']
})
export class SidebarmobileComponent {

  isShow : boolean = false ;

  constructor(public api : ApiService, private router : Router, private data : DataService) {
    this.getData() ;

    this.data.isShow$.subscribe((value) =>{
        this.isShow = value ;
    })
  }

  showside() {
    this.isShow =! this.isShow ;
  }

  listmenu : any = [] ;

  async getData() {
    (await this.api.get('/get_Menu')).subscribe((v) => {
        this.listmenu = v ;
    })
  }


  chuyentrang(item : any) {
    this.router.navigate([item.link]);
    this.data.toggleBars(false);
  }


  setShowHide(item: any) {
      item.active =! item.active ;
  }

}

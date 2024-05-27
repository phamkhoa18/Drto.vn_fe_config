import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  listmenu : any = [] ;


  constructor(public api : ApiService) {
    this.getData() ;
  }

  async getData() {
    (await this.api.get('/get_Menu')).subscribe((v) => {
        this.listmenu = v ;
    })
  }


  setShowHide(item: any) {
      item.active =! item.active ;
  }


}

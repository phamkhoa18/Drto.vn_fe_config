import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-onecategory',
  templateUrl: './onecategory.component.html',
  styleUrls: ['./onecategory.component.scss']
})
export class OnecategoryComponent {


  @Input() id!: String ;

  onedetail : any ;
  listnew : any ;
  onenewfeed : any ;

  constructor(public api : ApiService) {

  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.id) {
      this.getData(this.id , 4,1 ,false);
    } else {
      console.error('Missing id!');
    }
  }

  async getData(idCategory: any , limit : any , page: any , pushitem: boolean) {
    (await this.api.get('/get_category_new/' + idCategory + '/' + limit + '/' + page)).subscribe((v : any ) => {
      this.onedetail = v.title ;
      this.listnew = v.data ;
    })
  }


}

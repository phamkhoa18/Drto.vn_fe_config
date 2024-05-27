import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menusearch',
  templateUrl: './menusearch.component.html',
  styleUrls: ['./menusearch.component.scss']
})
export class MenusearchComponent {
  isSearch : boolean = false ;
  searchname: any = '' ;

  constructor (
      private dataService : DataService,
      private router : Router
  ) {}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataService.isSearch$.subscribe((v) => {
        this.isSearch = v ;
    })
  }

  search() {
    // trước khi gửi đi cần xử lý giá trị tìm kiếm
    this.router.navigate(['/tim-kiem/' + this.handleSearch(this.searchname)]);
    this.searchname = '' ;
    this.dataService.setHeaderBlock(false) ;
  }

  handleSearch(value : String) {
    // String to Array
    var array = value.split(' ').filter((e : any) => {
      return e != '' ;
    });
    var processed = array.join('-');
    return processed ;
  }

  setSearch() {
      this.isSearch = false ;
      this.dataService.setHeaderBlock(this.isSearch);
  }
}

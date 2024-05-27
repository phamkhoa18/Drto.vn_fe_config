import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  displayedColumns = ['number','name' , 'image' , 'slug', 'link' , 'actions'];
  dataSource: any ;
  addItemForm: FormGroup;

  items : any = [] ;
  isValid: Boolean = false;
  listdanhmuc: any  = [];
  isLoading : Boolean = true ;
  // dòng chảy
  private _listdanhmucSuject : BehaviorSubject<[]> = new BehaviorSubject([]);
  private _itemsSuject : BehaviorSubject<[]> = new BehaviorSubject([]);
  // nơi phân phát
  listdanhmuc$ : Observable<[]> = this._listdanhmucSuject.asObservable() ;
  items$ : Observable<[]> = this._itemsSuject.asObservable() ;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    public apiService : ApiService
     ) {
    this.addItemForm = this.formBuilder.group({
        name : new FormControl('' , Validators.required),
        slug : new FormControl(''),
        link : new FormControl(''),
        parent_id : new FormControl(null),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData() ;
  }

  setlistdanhmuc(data : any) {
    this._listdanhmucSuject.next(data);
  }

  setlistitems(data : any ) {
    this._itemsSuject.next(data);
  }


  async getData() {
    (await this.apiService.get('/list_new')).subscribe((v) => {
        this.dataSource  = v ;
    })
  }





  editItem(element: Element) {
    // Xử lý logic chỉnh sửa ở đây
    console.log('Chỉnh sửa:', element);
  }

  async removeItem(element: any) {
    // Xử lý logic xóa ở đây
    Swal.fire({
      title: 'Bạn có muốn xóa danh mục này không ?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then( async (result) => {

      if (result.isConfirmed) {
        (await this.apiService.get('/del_new/' + element._id)).subscribe((v : any ) => {
            if(v.status == 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              this.getData();
            } else {
              Swal.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
              this.getData();
            }
        });
      }

    })
  }
}


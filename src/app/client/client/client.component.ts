import { Component , ElementRef } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {


  constructor(private elRef : ElementRef ) {
    
  }



  scrollTop() {
    // Lấy phần tử đầu tiên trong DOM (thường là phần tử gốc của trang)
    const element = this.elRef.nativeElement.ownerDocument.documentElement;

    // Thực hiện scroll lên đầu trang
    element.scrollTo({
      top: 0,
      behavior: 'smooth' // Để có hiệu ứng scroll mượt mà
    });
  }
}

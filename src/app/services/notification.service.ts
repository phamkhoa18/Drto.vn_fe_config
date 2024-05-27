import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar : MatSnackBar) { }

  // Hiển thị thông báo thành công
  showSuccess(message: string): void {
    this.snackBar.open(message, 'Đóng', {
      duration: 3000, // Thời gian hiển thị thông báo (ms)
      panelClass: ['success-snackbar'], // Lớp CSS cho thông báo thành công
    });
  }

  // Hiển thị thông báo lỗi
  showError(message: string): void {
    this.snackBar.open(message, 'Đóng', {
      duration: 3000, // Thời gian hiển thị thông báo (ms)
      panelClass: ['error-snackbar'], // Lớp CSS cho thông báo lỗi
    });
  }
}

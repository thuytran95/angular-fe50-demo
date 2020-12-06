import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // doi utuong behavior sunject dung de luu tru global variable
  currentUser = new BehaviorSubject(null);
  // this.currentUser.next(valu): set lai gia tri cho bien currentUser
  // this.currentUser.value: lấy ra giá trị tai mot thoi diem
  // this.currentUser.asObservable(): chuyen currentUser thanh  mot Observable -> ms cos the subscribe value cuar Behavior sb
  // this.cuurrentUser.asObservable().subscribe(): theo doi gia tri thay doi value cua currentUser: tuong tu nhu co che connect trong react
  // tac vu them xoa sua -> call api them , sau do call api getlist (doi hoi tinh toan ven du lieu cao)
  //Khong doi hoi tinh toan ven du lieu cao: thif khi them luu laij trong local storage, khong can goi api getlist

  constructor(private http: HttpClient) {}

  // kiem tra trong localstorage co user khong thi set vao currentUser
  initCurrentUser() {
    const user = localStorage.getItem('user');
    if (user) {
      // truoc khi lay du lieu phai parse
      this.currentUser.next(JSON.parse(user));
    }
  }

  signup(values: any): Observable<any> {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';

    return this.http.post(url, { ...values, maNhom: 'GP01' });
  }

  signin(values: any): Observable<any> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';

    return this.http.post(url, values);
  }
}

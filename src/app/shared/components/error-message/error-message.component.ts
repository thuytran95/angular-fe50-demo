import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})

// <app-error-message
//  name="taiKhoan"
//  validator="signinForm.get('taiKhoan')"
// ></app-error-message>
export class ErrorMessageComponent implements OnInit {
  @Input() name: string;
  @Input() validator: FormControl;

  messages: any = {
    taiKhoan: {
      required: "Tài khoản không được để trống"
    },
    matKhau: {
      required: "Mật khẩu không được để trống",
      minlength: "Mật khẩu ít nhất 3 kí tự",
      maxlength: "Mật khẩu nhiều nhất 20 kí tự",
    },
    email: {
      required: "Email không được để trống",
      pattern: "Email không đúng định dạng"
    },
    hoTen: {
      required: "Họ tên không được để trống",
    },
    soDt: {
      required: "Số điện thoại không được để trống",
    }
  }

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private auth: AuthService, private router: Router) {
    this.signinForm = new FormGroup({
      taiKhoan: new FormControl('', [Validators.required]),
      matKhau: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
    });
  }

  ngOnInit(): void {}

  handleSignin() {
    // Đánh dấu tất cả input thành trạng thái touched là true
    // Nếu form không hợp lệ, kết thúc hàm
    this.signinForm.markAllAsTouched();
    if (this.signinForm.invalid) return;

    this.auth.signin(this.signinForm.value).subscribe({
      next: (result) => {
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result));
        // cap nhatj thong in User vao bien currentUse r trong AuthService
        this.auth.currentUser.next(result);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }
}

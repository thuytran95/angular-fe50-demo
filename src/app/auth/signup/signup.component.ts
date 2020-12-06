import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  // de su dung signupForm trong html
  @ViewChild('signupForm') signupForm: NgForm;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // form module nhuoc diem: khoi tao bien trong htmls
  // kiem tra xem form da thay doi hay chua va chua dk submit
  isDirtyForm(): boolean {
    return this.signupForm.dirty && !this.signupForm.submitted;
  }

  handleSignup(values: any) {
    console.log(values);
    this.auth.signup(values).subscribe({
      next: (result) => {
        // Điều hướng trong component
        this.router.navigate(['/signin']);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }
}

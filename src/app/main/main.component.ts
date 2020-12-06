import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  // c1: cho ;ay d va;ue curreUse dung  lan
  // this.currentUser = this.auth.currentUser.value
  currentUser: any;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    // c2:lay va cap nhat gia tri trong curreUser
    // tu dong theo doi gia tri cua currentUser trong authService
    // khi currUser tay doi gia tri => se tu dong nhay vao callback next -> lay dk gia tri ms nhat cua currenUser
    this.auth.currentUser.asObservable().subscribe({
      next: (result) => {
        this.currentUser = result;
      },
    });
  }
}

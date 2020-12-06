import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';

// meta-data
@Component({
  selector: 'app-root', // Tên component để nhúng vào html
  templateUrl: './app.component.html', // Link tới file html
  styleUrls: ['./app.component.scss'], // Link tới file style
})
export class AppComponent implements OnInit {
  // muon ca main module va movie module deu co thong tin user
  constructor(private auth: AuthService) {}
  title = 'fe50-angular';
  ngOnInit(): void {
    this.auth.initCurrentUser();
  }
}

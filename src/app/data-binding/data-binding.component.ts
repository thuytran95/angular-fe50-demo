import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  message: string = 'Hello Angular';
  isDisabled: boolean = true;
  fullName: string = "";
  username: string = "";
  email: string = "";
  address: string = "";


  constructor() {}

  ngOnInit(): void {}

  changeFullName(event) {
    this.fullName = event.target.value
  }

  changeEmail(value: string) {
    // this.email = (<HTMLInputElement>document.getElementById("email")).value

    this.email = value
  }
}
















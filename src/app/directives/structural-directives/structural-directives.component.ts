import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  isActive: boolean = true
  isLoggedIn: boolean = false
  color: string = 'red'
  dshv: any[] = [
    {hoTen: "Nguyễn Văn Tí", lop: "FE50"},
    {hoTen: "Nguyễn Văn Sửu", lop: "FE50"},
    {hoTen: "Nguyễn Văn Dần", lop: "FE50"},
    {hoTen: "Nguyễn Văn Mẹo", lop: "FE50"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

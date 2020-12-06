import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  // Khai báo Input để nhận dữ liệu từ component cha
  @Input() movie: any;
  // EventEmitter: Đối tượng để tạo thành 1 custom event
  @Output() onDelete = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleDelete() {
    // Đẩy bộ phim muốn xoá lên component cha
    // trong angular, muốn đẩy dữ liệu từ con lên cha
    // => thông qua 1 event. (event ở đâu)
    // emit: trigger event, và đẩy event lên component cha
    // this.movie <=> $event
    this.onDelete.emit(this.movie);
  }
}

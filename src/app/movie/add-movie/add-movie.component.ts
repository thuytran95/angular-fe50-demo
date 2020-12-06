import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  @Output() onAdd = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleAdd(name, price, image) {
    // File to base64 để có thể đưa vào src của tag img
    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onload = (event) => {
      const movie = {
        name,
        price,
        image: event.target.result,
      };

      this.onAdd.emit(movie);
    };
  }
}

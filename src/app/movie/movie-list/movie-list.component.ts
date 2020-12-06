import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnChanges {
  @Input() movieAdd: any;

  movieList: any[] = [
    {
      name: 'Avenger',
      price: 80000,
      image: 'assets/images/avenger.jpeg',
    },
    {
      name: 'Iron man',
      price: 80000,
      image: 'assets/images/iron-man.jpeg',
    },
    {
      name: 'One punch man',
      price: 80000,
      image: 'assets/images/one-punch-man.jpeg',
    },
  ];

  constructor() {}

  // Lifecycle hooks: chạy khi Input bị thay đổi
  ngOnChanges(changes) {
    console.log(changes);
    const { movieAdd } = changes;
    if (movieAdd?.currentValue?.name !== movieAdd?.previousValue?.name) {
      this.movieList.push(movieAdd.currentValue);
    }
  }

  handleDelete(movie: any) {
    console.log(movie);
    this.movieList = this.movieList.filter((item) => {
      return item.name !== movie.name;
    });
  }

  ngOnInit(): void {}
}

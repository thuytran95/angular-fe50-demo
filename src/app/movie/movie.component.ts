import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @ViewChild('movieListComponent') movieListComponent: MovieListComponent;
  movieAdd: any;
  constructor() {}

  ngOnInit(): void {}

  handleAdd(movie) {
    // this.movieAdd = movie;
    this.movieListComponent.movieList.push(movie);
  }
}

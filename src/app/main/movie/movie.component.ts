import { Component, OnInit } from '@angular/core';
// ActivatedRoute: dùng để tương tác vs params
import { ActivatedRoute } from '@angular/router';

import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: any = null
  loading: boolean = false
  error: string = ""

  // Demo
  obj: any = {
    hoTen: 'Dan',
    lop: 'FE50',
    gender: 'man',
    age: 25
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    // Lấy params
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        // Lấy mã phim từ params, dùng mã phim gọi API
        this.loading = true
        this.movieService.getMovieDetail(params.id).subscribe({
          next: result => {
            this.movie = result
            this.loading = false
            console.log(this.movie)
          },
          error: error => {
            console.log(error)
            this.loading = false
            this.error = error.error
          }
        })
      },
    });

    // Lấy query params
    this.activatedRoute.queryParams.subscribe({
      next: params => {
        console.log(params)
      }
    })
  }
}















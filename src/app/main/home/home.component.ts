import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movieList: Movie[] = [];
  // Phải khai báo trong constructor mới có thể sử dụng service
  constructor(private movieService: MovieService) {}

  // Tương đương componentDidMount bên react
  // Thích hợp để gọi API, tương tác vs DOM, setTimeout,...
  ngOnInit(): void {
    // Tách biệt logic khỏi component, logic sẽ được xử lý trong service, component chỉ việc gọi tới các hàm trong service
    // this.movieService
    //   .getMovieListPromise()
    //   .then((res) => {
    //     this.movieList = res as any;
    //   })
    //   .catch((error) => console.log(error));

    this.movieService.getMovieList().subscribe({
      // next: Nhận kết quả
      next: (result) => {
        this.movieList = result
        console.log(this.movieList)
      },
      // error: Nhận lỗi
      error: (error) => {
        console.log(error)
      },
      // complete: Chạy sau khi thành công
      complete: () => {
        console.log('DONE')
      }
    })
  }
}







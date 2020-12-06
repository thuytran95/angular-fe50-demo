import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  // Từ phiên bản angular 5 trở lên, khi có providedIn: 'root', không cần phải import service vào trong providers ở AppModule
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovieList(): Observable<Movie[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim';

    let params = new HttpParams();
    params = params.append('maNhom', 'GP01');

    return this.http.get<Movie[]>(url, { params });
  }

  getMovieDetail(id: string): Observable<any> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim';

    let params = new HttpParams();
    params = params.append('maPhim', id);

    return this.http.get(url, { params });
  }

  // getMovieList(): Movie[] {
  //   return [
  //     {
  //       name: 'Avenger',
  //       price: 80000,
  //       image: 'assets/images/avenger.jpeg',
  //     },
  //     {
  //       name: 'Iron man',
  //       price: 80000,
  //       image: 'assets/images/iron-man.jpeg',
  //     },
  //     {
  //       name: 'One punch man',
  //       price: 80000,
  //       image: 'assets/images/one-punch-man.jpeg',
  //     },
  //   ];
  // }

  // getMovieListPromise() {
  //   return new Promise((resolve, reject) => {
  //     // fake api
  //     setTimeout(() => {
  //       // Thành công trả về kết quả
  //       resolve([
  //         {
  //           name: 'Avenger',
  //           price: 80000,
  //           image: 'assets/images/avenger.jpeg',
  //         },
  //         {
  //           name: 'Iron man',
  //           price: 80000,
  //           image: 'assets/images/iron-man.jpeg',
  //         },
  //         {
  //           name: 'One punch man',
  //           price: 80000,
  //           image: 'assets/images/one-punch-man.jpeg',
  //         },
  //       ]);

  //       // Thất bại trả về lỗi
  //       // reject('Error')
  //     }, 2000);
  //   });
  // }

  // getMovieListObservable() {
  //   return new Observable((subscribe) => {
  //     setTimeout(() => {
  //       // subscribe.next() emit dữ liệu
  //       // subscribe.next() sẽ không kết thúc Observable
  //       subscribe.next([
  //         {
  //           name: 'Avenger',
  //           price: 80000,
  //           image: 'assets/images/avenger.jpeg',
  //         },
  //       ]);
  //     }, 2000);
  //     setTimeout(() => {
  //       subscribe.next([
  //         {
  //           name: 'Iron man',
  //           price: 80000,
  //           image: 'assets/images/iron-man.jpeg',
  //         },
  //       ]);
  //       // Sau khi complete sẽ kết thúc Observable
  //       // subscribe.complete()

  //       // Error kết thúc Observable
  //       subscribe.error('Network error')

  //       // subscribe.next() ở đây sẽ không được chạy
  //       subscribe.next([
  //         {
  //           name: 'Wonder woman',
  //           price: 80000,
  //           image: 'assets/images/wonder-woman.jpeg',
  //         },
  //       ]);
  //     }, 4000);
  //   });
  // }
}

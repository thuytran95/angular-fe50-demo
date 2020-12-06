import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

import { Baitap1Module } from './baitap1/baitap1.module';
import { Baitap2Module } from './baitap2/baitap2.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DirectivesModule } from './directives/directives.module';
import { MovieModule } from './movie/movie.module';
import { CartExcersiceModule } from './cart-excersice/cart-excersice.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './core/interceptore/auth.interceptor';
// NgModule là 1 meta-data: Khai báo cho angular biết class AppModule
// Là 1 Module
@NgModule({
  // Nơi khai báo các component do module quản lý
  // 1 component bắt buộc phải được quản lý bởi 1 module
  // 1 module có thể quản lý nhiều component
  declarations: [AppComponent, DemoComponent],
  // HomeModule: HomePageComponent, DetailComponent, NewsComponent
  // Chỉ cần import HomeModule vào AppModule là có thể sử dụng
  // tất cả component của HomeModule
  // Module của angular: HTTPClientModule, FormsModule, RouterModule
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Baitap1Module,
    // Baitap2Module,
    // DataBindingModule,
    // DirectivesModule,
    // MovieModule,
    // CartExcersiceModule,
  ],
  // import services
  providers: [
    // multi: co the su dung o tat ca cac
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  // Khai báo AppComponent là component khởi chạy đầu tiên
  // Chỉ khai báo ở AppModule
  bootstrap: [AppComponent],
})
export class AppModule {}

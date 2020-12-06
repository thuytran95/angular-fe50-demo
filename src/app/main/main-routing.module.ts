import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { BookingComponent } from './booking/booking.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'movie/:id', component: MovieComponent },
      { path: 'movie', component: MovieComponent },
    ],
  },

  { path: 'booking', component: BookingComponent },
];

@NgModule({
  // Ngoại trừ App-routing Module là sử dụng forRoot, còn lại tất cả Module khác đều sử dụng forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

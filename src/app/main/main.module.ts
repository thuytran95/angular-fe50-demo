import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from 'src/app/shared/pipe/pipe.module';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { BookingComponent } from './booking/booking.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    BookingComponent,
    MainComponent,
  ],
  imports: [CommonModule, MainRoutingModule, PipeModule, MatButtonModule, MatMenuModule],
})
export class MainModule {}

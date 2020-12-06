import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      // Nếu path là /admin => tự động chuyển sang /admin/users
      { path: '', redirectTo: 'users' },
      { path: 'users', component: UsersComponent },
      { path: 'movies', component: MoviesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

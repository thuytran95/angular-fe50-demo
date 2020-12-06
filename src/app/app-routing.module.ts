import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Baitap2Component } from './baitap2/baitap2.component';
import { MovieComponent } from './movie/movie.component';
import { CartExcersiceComponent } from './cart-excersice/cart-excersice.component';
// import { MainModule } from './main/main.module';
// import { AdminModule } from './admin/admin.module';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  // Cách 1: Routing theo component
  // { path: 'baitap2', component: Baitap2Component },
  // { path: 'movie', component: MovieComponent },
  // { path: 'cart', component: CartExcersiceComponent },
  // Cách 2: Routing theo module
  // pathMatch: 'full' <=> exact bên React
  // { path: '', pathMatch: 'full', loadChildren: () => MainModule },
  {
    // muon bao ve admin them pro: cacActivate
    path: 'admin',
    canActivate: [AdminGuard],
    // Lazy load: chỉ load module khi truy cập vào route tương ứng
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

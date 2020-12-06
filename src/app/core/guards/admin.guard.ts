import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// co the viet ra nhieu guard
// bao ve khong cho nguoi dung vao trang admin
// chan ben ngoai di vao ben trong
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = localStorage.getItem('user');
    if (user) {
      const { maLoaiNguoiDung } = JSON.parse(user);
      if (maLoaiNguoiDung === 'QuanTri') {
        // da dang nhap vv cos quyen admin -> cho phep truy cap
        return true;
      }

      // da dang nhap nhung ko co quyen admin -> redirect ve trang home dong thoi return ve false
      this.router.navigate(['/']);
      return false;
    }

    // neu khong nhay vao if (user)-> chua dang nhap -> redirect ve signin
    // return ve true: cho phep truy cap vao / false khong cho phesp truy cap vao: bao ve cp va module
    // truoc khi vao admin module nos se vao guards truoc
    this.router.navigate(['/signin']);
    return false;
  }
}

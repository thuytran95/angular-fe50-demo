import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from './../../auth/signup/signup.component';

@Injectable({
  providedIn: 'root',
})
export class SignupGuard implements CanDeactivate<SignupComponent> {
  // chan tu ben trong di ra ben ngoai
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isDirty = component.isDirtyForm();

    // form da thay doi, can phai hien thong bao khi nguoi dung roi khoi
    if (isDirty) {
      // co 2nut OK va cancel , khac alert: ok tra ve true -> cho phep roi di, cancel: false
      confirm('Ban co chac muon roi khoi...');
    }

    // return true -> cho phep ra khoi page, false: tam thoi chan ko cho ra khoi page
    // khac vs canACtive: no chi sd cho 1 page duy nhat -> phair import cai cp muon kiem tra (can co trang thai cua cp quyet dinh xem co chano)
    // canACtivate: su dung dk cho nhieu page
    // neu form chua co j thay doi, thi return ve true cho nguoi dung roi di
    return true;
  }
}

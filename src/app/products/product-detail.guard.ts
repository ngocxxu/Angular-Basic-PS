import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    // cung cấp đường dẫn URL hiện tại
    // route.snapshot = route bên dưới
    route: ActivatedRouteSnapshot,
    // cung cấp thông tin hiện tại của route hiện tại
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      // lấy id once time
      const id = Number(route.paramMap.get('id'));
      if(isNaN(id) || id < 1){
        alert('Invalid product id');
        this.router.navigate(['/products'])
        return false
      }
    return true;
  }
}

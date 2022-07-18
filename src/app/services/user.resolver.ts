import { Injectable } from '@angular/core';
import { Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsersResponse } from '../interfaces/user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<UsersResponse> {
  constructor(private userService:UserService){}
  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<UsersResponse> {
    return this.userService.getUser(route.paramMap.get('uuid')!);
  }
}

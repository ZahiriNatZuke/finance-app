import {Injectable} from '@angular/core';
import {User} from '../interfaces/User';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {first} from 'rxjs/operators';
import {ApiHelpers} from '../../../shared/utils/api.helpers';
import {Router} from '@angular/router';

const apiHelpers = new ApiHelpers();

@Injectable({providedIn: 'root'})
export class AuthService {

  private _userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private httpClient: HttpClient, private _router: Router) {
    const authUser = sessionStorage.getItem('x-auth-user');
    this.userUpdate = !!authUser ? JSON.parse(authUser) : null;
  }

  get userObservable(): Observable<User | null> {
    return this._userSubject.asObservable();
  }

  set userUpdate(value: User | null) {
    sessionStorage.setItem('x-auth-user', JSON.stringify(value));
    this._userSubject.next(value);
  }

  Login(body: any) {
    return of({
      email: `${body.user}@gmail.com`,
      full_name: `${body.user} Test`,
      username: body.user
    });
    // return this.httpClient.post<any>(apiHelpers.getLoginURL(), body, {
    //   headers: apiHelpers.getHeadersWithOutAuth()
    // }).pipe(first());
  }

  LogOut() {
    this.userUpdate = null;
    this._router.navigate(['/auth/login']);
    // return this.httpClient.get<any>(apiHelpers.getLogOutURL(), {
    //   headers: apiHelpers.getHeadersWithAuth()
    // }).pipe(first());
  }

  get isAuthenticated(): boolean {
    return this._userSubject.getValue() !== null;
  }

}

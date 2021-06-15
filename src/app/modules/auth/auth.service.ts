import {Injectable} from '@angular/core';
import {User} from './shared/interfaces/User';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {first} from 'rxjs/operators';
import {ApiHelpers} from '../shared/utils/api.helpers';

const apiHelpers = new ApiHelpers();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // @ts-ignore
  private _userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private httpClient: HttpClient) {
  }

  get userSubject() {
    return this._userSubject.asObservable();
  }

  set userSubject(value: User) {
    this._userSubject.next(value);
  }

  Login(body: any): Observable<any> {
    return this.httpClient.post<any>(apiHelpers.getLoginURL(), body, {
      headers: apiHelpers.getHeadersWithOutAuth()
    }).pipe(first());
  }

  Logout(): Observable<any> {
    return this.httpClient.get<any>(apiHelpers.getLogOutURL(), {
      headers: apiHelpers.getHeadersWithAuth()
    }).pipe(first());
  }
}

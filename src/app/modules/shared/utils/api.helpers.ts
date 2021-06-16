import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment.prod';

export class ApiHelpers {
  public URL_API: string;

  constructor() {
    this.URL_API = environment.URL_API;
  }

  public getLoginURL(): string {
    return this.URL_API + '/login';
  }

  public getLogOutURL() {
    return this.URL_API + '/logout';
  }

  public getGlobalPositionDataURL() {
    return this.URL_API + '/assets/data/finance.global-position.json';
  }

  public getInvestmentHistoryDataURL() {
    return this.URL_API + '/assets/data/finance.investment-history.json';
  }

  public getHeadersWithOutAuth(): HttpHeaders {
    return new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
  }

  public getHeadersWithAuth(): HttpHeaders {
    return new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${sessionStorage.getItem('X-Auth-Token')}`
    });
  }
}

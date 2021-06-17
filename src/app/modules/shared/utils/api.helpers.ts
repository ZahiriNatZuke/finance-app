import {environment} from '../../../../environments/environment';

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

  public getPersonalDataURL() {
    return this.URL_API + '/assets/data/finance.personal-data.json';
  }

  public getAdministrationDataURL() {
    return this.URL_API + '/assets/data/finance.administration.json';
  }
}

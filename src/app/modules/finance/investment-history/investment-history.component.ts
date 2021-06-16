import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiHelpers} from '../../shared/utils/api.helpers';
import {InvestmentHistoryDto} from './shared/interfaces/InvestmentHistoryDto';

const apiHelpers = new ApiHelpers();

@Component({
  selector: 'app-investment-history',
  templateUrl: './investment-history.component.html',
  styleUrls: ['./investment-history.component.scss']
})
export class InvestmentHistoryComponent implements OnInit {
  public data: InvestmentHistoryDto | undefined;
  public showLoader: boolean = false;

  constructor(private _httpClient: HttpClient) {
    this.showLoader = true;
    this._httpClient.get<InvestmentHistoryDto>(apiHelpers.getInvestmentHistoryDataURL())
      .subscribe((res: InvestmentHistoryDto) => {
        this.data = res;
        this.showLoader = false;
      })
  }

  ngOnInit(): void {
  }

}

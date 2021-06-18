import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiHelpers} from '../../shared/utils/api.helpers';
import {ClosedInvestmentHistory, InvestmentHistoryDto} from './shared/interfaces/InvestmentHistoryDto';
import {UtilsService} from '../../shared/utils/services/utils.service';

const apiHelpers = new ApiHelpers();

@Component({
  selector: 'app-investment-history',
  templateUrl: './investment-history.component.html',
  styleUrls: ['./investment-history.component.scss']
})
export class InvestmentHistoryComponent implements OnInit {
  public data!: InvestmentHistoryDto;
  public showLoader: boolean = false;
  public closedInvestmentHistory: ClosedInvestmentHistory[] = [];

  constructor(private _httpClient: HttpClient, public utils: UtilsService) {
    this.showLoader = true;
    this._httpClient.get<InvestmentHistoryDto>(apiHelpers.getInvestmentHistoryDataURL())
      .subscribe((res: InvestmentHistoryDto) => {
        this.data = res;
        this.closedInvestmentHistory = this.data.closed_investment_history
          .map((value, index) => ({...value, order: index}));
        this.showLoader = false;
      })
  }

  ngOnInit(): void {
  }

  public catchFilterChange(event: string) {
    if (this.closedInvestmentHistory.length > 0)
      this.closedInvestmentHistory = this.utils.sortArray(this.closedInvestmentHistory, event);
  }
}

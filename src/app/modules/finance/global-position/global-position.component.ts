import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiHelpers} from '../../shared/utils/api.helpers';
import {ActiveInvestment, GlobalPositionDto} from './shared/interfaces/GlobalPositionDto';
import {UtilsService} from '../../shared/utils/services/utils.service';

const apiHelpers = new ApiHelpers();

@Component({
  selector: 'app-global-position',
  templateUrl: './global-position.component.html',
  styleUrls: ['./global-position.component.scss']
})
export class GlobalPositionComponent implements OnInit {
  public data: GlobalPositionDto | undefined;
  public showLoader: boolean = false;
  public activeInvestments: ActiveInvestment[] = [];

  constructor(private _httpClient: HttpClient, public utils: UtilsService) {
    this.showLoader = true;
    this._httpClient.get<GlobalPositionDto>(apiHelpers.getGlobalPositionDataURL())
      .subscribe((res: GlobalPositionDto) => {
        this.data = res;
        this.activeInvestments = this.data.active_investments
          .map((value, index) => ({...value, order: index}));
        this.showLoader = false;
      })
  }

  ngOnInit(): void {
  }

  public catchFilterChange(event: string) {
    if (this.activeInvestments.length > 0)
      this.activeInvestments = this.utils.sortArray(this.activeInvestments, event);
  }

}

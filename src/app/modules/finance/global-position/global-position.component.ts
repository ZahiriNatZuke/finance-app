import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiHelpers} from '../../shared/utils/api.helpers';
import {GlobalPositionDto} from './shared/interfaces/GlobalPositionDto';

const apiHelpers = new ApiHelpers();

@Component({
  selector: 'app-global-position',
  templateUrl: './global-position.component.html',
  styleUrls: ['./global-position.component.scss']
})
export class GlobalPositionComponent implements OnInit {
  public data: GlobalPositionDto | undefined;
  public showLoader: boolean = false;

  constructor(private _httpClient: HttpClient) {
    this.showLoader = true;
    this._httpClient.get<GlobalPositionDto>(apiHelpers.getGlobalPositionDataURL())
      .subscribe((res: GlobalPositionDto) => {
        this.data = res;
        this.showLoader = false;
      })
  }

  ngOnInit(): void {
  }

}

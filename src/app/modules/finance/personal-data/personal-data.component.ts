import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiHelpers} from '../../shared/utils/api.helpers';
import {PersonalDataDto} from './shared/interface/PersonalDataDto';

const apiHelpers = new ApiHelpers();

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  public data: PersonalDataDto | undefined;
  public showLoader: boolean = false;

  constructor(private _httpClient: HttpClient) {
    this.showLoader = true;
    this._httpClient.get<PersonalDataDto>(apiHelpers.getPersonalDataURL())
      .subscribe((res: PersonalDataDto) => {
        this.data = res;
        this.showLoader = false;
      })
  }

  ngOnInit(): void {
  }

}

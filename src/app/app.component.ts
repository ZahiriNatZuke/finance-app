import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import {Logger} from './modules/shared/utils/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    if (environment.production) {
      Logger.enableProductionMode();
    }
  }
}

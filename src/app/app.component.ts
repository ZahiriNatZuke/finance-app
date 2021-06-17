import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {Logger} from './modules/shared/utils/logger';
import {I18nService} from './modules/shared/modules/i18n/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private i18nService: I18nService) {
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);
  }

  ngOnInit(): void {
    if (environment.production) Logger.enableProductionMode();
  }

  ngOnDestroy(): void {
    this.i18nService.destroy();
  }
}

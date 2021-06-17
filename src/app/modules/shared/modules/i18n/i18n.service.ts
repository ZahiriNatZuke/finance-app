import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

const languageKey = 'i18n';

@Injectable({providedIn: 'root'})
export class I18nService {
  private defaultLanguage!: string;
  supportedLanguages!: string[];

  private langChangeSubscription!: Subscription;

  constructor(private translateService: TranslateService) {
  }

  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';

    this.langChangeSubscription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem(languageKey, event.lang);
    });
  }

  destroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  set language(language: string) {
    language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
    let isSupportedLanguage = this.supportedLanguages.includes(language);

    if (!isSupportedLanguage) language = this.defaultLanguage;

    this.translateService.use(language);
  }

  get language(): string {
    return this.translateService.currentLang;
  }

}

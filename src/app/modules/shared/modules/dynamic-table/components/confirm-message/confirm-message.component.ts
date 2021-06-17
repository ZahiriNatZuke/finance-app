import {Component} from '@angular/core';
import {DynamicTableService} from '../../dynamic-table.service';
import {ConfirmSettings} from '../../utils/interfaces/confirm-settings';

@Component({
  templateUrl: './confirm-message.component.html',
  styleUrls: ['./confirm-message.component.scss']
})
export class ConfirmMessageComponent {
  public ConfirmSettings: ConfirmSettings | undefined;

  constructor(private dynamicTableService: DynamicTableService) {
    this.dynamicTableService.configTableObservable.subscribe(config => {
      if (!!config?.ConfirmSettings) this.ConfirmSettings = config.ConfirmSettings;
    });
  }

}

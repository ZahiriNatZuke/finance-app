import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {InputConfig} from '../../shared/modules/dynamic-table/utils/interfaces/input-config';
import {ColumnType} from '../../shared/modules/dynamic-table/utils/interfaces/column';
import {DynamicTableService} from '../../shared/modules/dynamic-table/dynamic-table.service';
import {OperationEvent, TypeOpEvent} from '../../shared/modules/dynamic-table/utils/interfaces/operation-event';
import {ApiHelpers} from '../../shared/utils/api.helpers';
import {TranslateService} from '@ngx-translate/core';

const apiHelpers = new ApiHelpers();

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit, AfterContentChecked {

  public dataTable: any[] = [];
  private urlData: string = apiHelpers.getAdministrationDataURL();
  public inputConfig: InputConfig | undefined;
  public showLoader: boolean = false;

  constructor(private dynamicTableService: DynamicTableService, private changeDetectorRef: ChangeDetectorRef,
              private translate: TranslateService) {
    this.dynamicTableService.configTable = this.setUpConfigurations;
    this.dynamicTableService.loadingObservable.subscribe(status => this.showLoader = status);
  }

  public ngOnInit(): void {
    this.dynamicTableService.configTableObservable.subscribe(config => this.inputConfig = config);
    this.dynamicTableService.dataTableObservable.subscribe(dataTable => this.dataTable = dataTable);
  }

  public get setUpConfigurations(): InputConfig {
    this.inputConfig = {
      displayedColumns: [
        {
          header: 'dt.full_name',
          column: 'full_name',
          show: true,
          type: ColumnType.Regular
        },
        {
          header: 'dt.language',
          column: 'language',
          show: true,
          type: ColumnType.Language
        },
        {
          header: 'dt.web_access',
          column: 'web_access',
          show: true,
          type: ColumnType.Boolean
        },
        {
          header: 'dt.access_info',
          column: 'access_info',
          show: true,
          type: ColumnType.AccessInfo
        }
      ],
      groupingColumns: [],
      showOpCRUD: true,
      showOpEdit: true,
      urlData: this.urlData,
      showOpNew: true,
      showOpDelete: true,
      OptionSettings: {
        iconNew: 'add_circle_outlined',
        Update: {
          icon: 'edit',
          literal: 'common.update',
        },
        Delete: {
          icon: 'delete_outlined',
          literal: 'common.delete',
        }
      },
      showFilter: true,
      FilterSettings: {
        debounceTime: 150,
        filterPlaceHolder: 'dt.filter_placeholder',
        Reload: {
          icon: 'restart_alt',
          color: '#248232ff'
        }
      },
      showPaginator: true,
      PaginatorSettings: {
        pageSize: 10,
        pageSizeOptions: [10, 15, 20]
      },
      showOpSelect: false,
      SelectorSettings: {
        label: 'dt.select_label',
        singularLiteral: 'dt.single_literal_select',
        pluralLiteral: 'dt.plural_literal_select',
        appearance: 'standard'
      },
      ConfirmSettings: {
        title: 'dt.modal_title_elimination',
        content: 'dt.modal_content_elimination.user',
        Accept: {
          literal: 'common.accept',
        },
        Cancel: {
          literal: 'common.cancel',
        }
      },
      canSticky: true,
      startFieldSticky: 'full_name',
      endFieldSticky: 'op',
      dataField: 'data'
    }
    return this.inputConfig;
  }

  public triggerOption(event: OperationEvent): void {
    switch (event.type) {
      case TypeOpEvent.New:
        break;
      case TypeOpEvent.Update:
        break;
      case TypeOpEvent.Delete:
        break;
    }
  }

  ngAfterContentChecked(): void {
    this.changeDetectorRef.detectChanges()
  }

}

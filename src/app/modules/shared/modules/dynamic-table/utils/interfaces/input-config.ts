import {Column} from './column';
import {FilterSettings} from './filter-settings';
import {GroupingColumn} from './grouping-column';
import {OptionSettings} from './option-settings';
import {PaginatorSettings} from './paginator-settings';
import {SelectorSettings} from './selector-settings';
import {ConfirmSettings} from './confirm-settings';

export interface InputConfig {
  displayedColumns: Column[],
  groupingColumns: GroupingColumn[],
  urlData: string,
  showOpCRUD?: boolean,
  showOpNew?: boolean,
  showOpEdit?: boolean,
  showOpDelete?: boolean,
  dataField?: string,
  canSticky?: boolean,
  startFieldSticky?: string,
  endFieldSticky?: string,
  OptionSettings?: OptionSettings,
  showFilter?: boolean,
  FilterSettings?: FilterSettings,
  showPaginator?: boolean,
  PaginatorSettings?: PaginatorSettings,
  showOpSelect?: boolean,
  SelectorSettings?: SelectorSettings
  ConfirmSettings?: ConfirmSettings;
}





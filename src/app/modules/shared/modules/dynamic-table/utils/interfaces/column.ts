export interface Column {
  header: string;
  column: string;
  show: boolean;
  type: ColumnType;
  prop?: string;
}

export enum ColumnType {
  Regular = 1, Concat, Bullets, Boolean, Date, AccessInfo, Language
}

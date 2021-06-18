import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UtilsService {

  constructor() {
  }

  public sortArray(array: any[], field: string): any[] {
    if (field === 'none') {
      return array.sort((a, b) => (a.order < b.order) ? -1 : 1);
    } else {
      if (field.includes('date')) {
        return array.sort((a, b) => {
          const date1 = new Date(a[field]);
          const date2 = new Date(b[field]);
          return (date1 < date2) ? -1 : 1;
        });
      } else {
        return array.sort((a, b) => (a[field] < b[field]) ? -1 : 1);
      }
    }
  }
}

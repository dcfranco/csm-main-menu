import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class CsmFilterPipe implements PipeTransform {
  transform(items: any[], search: string, key: string): any[] {
    if (!items) {
      return [];
    }
    if (!search) {
      return items;
    }

    search = search.toLowerCase();
    return items.filter(it => {
      return it[key].toLowerCase().includes(search);
    });
  }
}

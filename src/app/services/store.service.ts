import { Injectable } from '@angular/core';

import { Item } from '../types';

interface StoreData {
  list: Item[]
  selectOptions: Record<string, string[]>
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private data: StoreData = {
    list: [],
    selectOptions: {}
  };

  get list(): Item[] {
    return this.data.list;
  }

  get selectOptions(): Record<string, string[]> {
    return this.data.selectOptions;
  }

  setList(data: Item[]): void {
    this.data.list = data;
  }

  updateListItem(item: Item): void {
    this.data.list = this.data.list
      .map(el => el['id'] === item['id'] ? item : el);
  }

  addListItem(item: Item): void {
    this.data.list.push(item);
  }

  setSelectOptions(data: Record<string, string[]>): void {
    this.data.selectOptions = data;
  }
}

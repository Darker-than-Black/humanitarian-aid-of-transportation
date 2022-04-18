import { set, get } from 'lodash';
import { Injectable } from '@angular/core';

import { Item } from '../types';

interface StoreData {
  list: Item[]
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private data: StoreData = {
    list: [],
  };

  get list(): Item[] {
    return this.data.list;
  }

  setList(data: Item[]): void {
    this.data.list = data;
  }

  updateListItem(item: Item, key: string): void {
    this.data.list.forEach(el => {
      if (el['id'] === item['id']) {
        set(el, key, get(item, key));
      }
    });
  }

  addListItem(item: Item): void {
    this.data.list.push(item);
  }
}

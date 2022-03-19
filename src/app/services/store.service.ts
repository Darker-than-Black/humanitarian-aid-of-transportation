import { Injectable } from '@angular/core';

import { Item } from '../types';

interface StoreData {
  list: Item[]
  tempList: string[]
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private data: StoreData = {
    list: [],
    tempList: []
  };

  get list(): Item[] {
    return this.data.list;
  }

  get tempList(): string[] {
    return this.data.tempList;
  }

  setList(data: Item[]): void {
    this.data.list = data;
  }

  updateListItem(item: Item): void {
    this.data.list = this.data.list
      .map(el => el.id === item.id ? item : el);
  }

  addListItem(item: Item): void {
    this.data.list.push(item);
  }

  setTempList(list: string[]): void {
    this.data.tempList = list;
  }
}

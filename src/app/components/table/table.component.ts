import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item, TableColumnConfig } from '../../types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: Item[] = [];
  @Input() config: TableColumnConfig[] = [];
  @Input() loading: boolean = false;
  @Output() openModal = new EventEmitter<void>();

  get fieldsOfColumns(): string[] {
    return this.config.map(({key}) => key);
  }
}

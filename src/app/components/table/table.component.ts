import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TABLE_CONFIG } from '../../configs/tableConfig';
import { Item, TableColumnConfig } from '../../types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: Item[] = [];
  @Input() loading: boolean = false;
  @Output() openModal = new EventEmitter<void>();

  columns: TableColumnConfig[] = TABLE_CONFIG;

  get fieldsOfColumns(): string[] {
    return this.columns.map(({key}) => key);
  }
}

import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { EditorComponent, Item, TableColumnConfig } from '../types';

@Component({
  template: '',
})
export class EditorMixin implements EditorComponent, OnInit {
  constructor(protected apiService: ApiService) {}

  @Input() data!: Item;
  @Input() config!: TableColumnConfig;
  @Output() finally = new EventEmitter<void>();

  field: string = '';
  loading: boolean = false;

  update(): void {
    this.loading = true;

    this.apiService.updateItem({...this.data, [this.config.field]: this.field})
      .subscribe(() => {
        this.loading = false;
        this.finally.emit();
      });
  }

  ngOnInit(): void {
    this.field = this.data[this.config.field] || '';
  }
}

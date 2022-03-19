import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { EditorComponent, Item } from '../types';

@Component({
  template: '',
})
export class EditorMixin implements EditorComponent, OnInit {
  constructor(protected apiService: ApiService) {}

  @Input() data!: Item;
  @Input() fieldName!: string;
  @Output() finally = new EventEmitter<void>();

  field: string = '';
  loading: boolean = false;

  update(): void {
    this.loading = true;

    this.apiService.updateItem({...this.data, [this.fieldName]: this.field})
      .subscribe(() => {
        this.loading = false;
        this.finally.emit();
      });
  }

  ngOnInit(): void {
    this.field = this.data[this.fieldName] || '';
  }
}

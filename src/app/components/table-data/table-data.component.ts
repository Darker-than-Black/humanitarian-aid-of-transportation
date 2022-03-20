import { get } from 'lodash';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

import { TableColumnConfig, Item, CustomFormlyFieldConfig } from '../../types';
import { ApiService } from '../../services/api.service';
import { EditorBuilder } from './editor-builder';

const DEFAULT_HANDLER = (data: any) => data;

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  @Input() item!: Item;
  @Input() config!: TableColumnConfig;
  @Input() template?: TemplateRef<any>;

  get fieldData(): string {
    return get(this.item, this.config.key, '');
  }

  get previewData(): string {
    const { handler = DEFAULT_HANDLER } = this.config;
    return this.fieldData ? handler(this.fieldData) : '–';
  }

  get isEditable(): boolean {
    return Boolean(this.config.type);
  }

  fields: CustomFormlyFieldConfig[] = [];
  model: Record<string, any> = {};

  ngOnInit(): void {
    const { key } = this.config;
    this.model[key] = this.item[key] || '';
  }

  setEditor(): void {
    if (!this.isEditable) {
      return;
    }

    const field = new EditorBuilder({
      ...this.config,
      onLeave: this.onLeave.bind(this),
    });

    this.fields.push(field);
  }

  onLeave(): void {
    this.apiService.updateItem({...this.item, ...this.model})
      .subscribe(() => {
        this.fields = [];
      });
  }
}

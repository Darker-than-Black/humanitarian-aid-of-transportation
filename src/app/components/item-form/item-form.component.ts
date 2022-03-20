import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { ITEM_FORM_CONFIG } from '../../configs/itemFormConfig';
import { CustomFormlyFieldConfig } from '../../types';
import { FieldBuilder } from './field-builder';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  @Output() closeModal = new EventEmitter<void>();

  loading: boolean = false;
  form = new FormGroup({});
  model: Record<string, any> = {};
  fields: CustomFormlyFieldConfig[] = [];

  ngOnInit() {
    ITEM_FORM_CONFIG.forEach(item => {
      this.model[item.key] = '';
      this.fields.push(new FieldBuilder(item));
    });
  }

  addItem(): void {
    this.loading = true;
    this.apiService.addItem(this.form.value).subscribe(() => {
      this.loading = false;
      this.closeModal.emit();
    });
  }
}

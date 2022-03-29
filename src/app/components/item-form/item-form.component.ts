import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBuilder } from './field-builder';
import { ApiService } from '../../services/api.service';
import { CustomFormlyFieldConfig, FormFieldConfig } from '../../types';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  @Input() config!: FormFieldConfig[]
  @Output() closeModal = new EventEmitter<void>();

  loading: boolean = false;
  form = new FormGroup({});
  model: Record<string, any> = {};
  fields: CustomFormlyFieldConfig[] = [];

  ngOnInit() {
    this.config.forEach(item => {
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

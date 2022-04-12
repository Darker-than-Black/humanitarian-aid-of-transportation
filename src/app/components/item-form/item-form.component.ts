import { Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { MedFormFieldConfig } from 'med-dynamic-form';
import { FormGroup } from '@angular/forms';

import { Item } from '../../types';
import { FieldBuilder } from './field-builder';
import { ApiService } from '../../services/api.service';
import { KEY_RECIPIENT_NAME } from '../../configs/filedKeys';
import { StoreService } from '../../services/store.service';
import { NEW_ROW_FORM_CONFIG } from '../../configs/formConfigs';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  constructor(private apiService: ApiService, private store: StoreService, private cb: ChangeDetectorRef) {
    this.config = NEW_ROW_FORM_CONFIG.map(el => {
      const selectFn = el.key === KEY_RECIPIENT_NAME ? this.onSelectRecipientName.bind(this) : undefined;
      return new FieldBuilder(el, selectFn);
    });
  }

  config: MedFormFieldConfig[] = [];

  @Output() closeModal = new EventEmitter<void>();

  @Input() data: Item[] = [];

  loading: boolean = false;
  form = new FormGroup({});

  ngAfterViewInit() {
    this.cb.detectChanges();
  }

  addItem(): void {
    this.loading = true;

    this.apiService.addItem(this.form.value).subscribe(() => {
      this.loading = false;
      this.closeModal.emit();
    });
  }

  onSelectRecipientName(value: string): void {
    const list = this.store.list.filter(({ recipient_name }: Item) => recipient_name === value);
    const [lastItem] = list.reverse();

    if (!lastItem) return;

    const {recipient_address, recipient_contact, recipient_phone} = lastItem;
    this.form.patchValue({
      recipient_address: recipient_address || '',
      recipient_contact: recipient_contact || '',
      recipient_phone: recipient_phone || '',
    })
  }
}

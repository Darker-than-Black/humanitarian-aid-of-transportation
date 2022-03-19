import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { StoreService } from '../../../services/store.service';
import { FormInputMixin } from '../../../mixins/FormInputMixin';
import { selectDataStoreDictionary } from '../../../configs/selectDataStoreDictionary';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent extends FormInputMixin{
  constructor(private store: StoreService) {
    super();
  }

  @Input() fieldName: string = '';

  get selectOptions(): string[] {
    const key = selectDataStoreDictionary.get(this.fieldName);

    if (!key) {
      return [];
    }

    return (this.store as Record<string, any>)[key] || [];
  }
}

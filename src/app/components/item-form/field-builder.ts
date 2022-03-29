import { FIELD_TYPES } from '../../configs/fieldTypes';
import { CustomFormlyFieldConfig } from '../../types';

export class FieldBuilder implements CustomFormlyFieldConfig {
  key: string;
  type: string;
  wrappers: string[] = ['input-wrapper'];
  className: string;
  templateOptions = {
    mask: '',
    label: '',
    class: '',
    labelKey: '',
    required: false,
    onLeave: () => {},
  };

  constructor(options:  {
    key: string;
    type: FIELD_TYPES;
    label?: string;
    class?: string;
    required?: boolean;
    inputMask?: string;
  }) {
    this.key = options.key;
    this.type = options.type || 'text';
    this.templateOptions.labelKey = options.key;
    this.templateOptions.label = options.label || '';
    this.className = options.class || '';
    this.templateOptions.mask = options.inputMask || '';
    this.templateOptions.required = options.required || false;
  }
}

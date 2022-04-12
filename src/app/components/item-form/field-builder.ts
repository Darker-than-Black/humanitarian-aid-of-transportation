import { FIELD_TYPES, MedFormFieldConfig } from 'med-dynamic-form';

export class FieldBuilder implements MedFormFieldConfig {
  key: string = '';
  editorType: FIELD_TYPES = FIELD_TYPES.TEXT;
  label: string = '';
  class: string = 'field col-12 md:col-6';
  required: boolean = false;
  onSelect = (t: any) => {};

  constructor(options: MedFormFieldConfig, onSelectFn?: (t: any) => void) {
    this.key = options.key;
    this.editorType = options.editorType;
    this.label = options.label || this.label;
    this.class = options.class || this.class;
    this.required = options.required || this.required;
    this.onSelect = onSelectFn || this.onSelect;
  }
}

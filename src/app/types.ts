import { FormlyFieldConfig, FormlyTemplateOptions, FieldTypeConfig } from '@ngx-formly/core';

import { FIELD_TYPES } from './configs/fieldTypes';

export interface TableColumnConfig {
  key: string
  label: string
  type?: FIELD_TYPES
  visibleEditorHandler?: (i: Item) => boolean
  inputMask?: string
  handler?: (data: any) => any
}

export interface FormFieldConfig {
  key: string
  label: string
  type: FIELD_TYPES
  inputMask?: string
  class?: string
  required?: boolean
}

export interface AppConfig {
  table: TableColumnConfig[]
  rowForm: FormFieldConfig[]
  apiUrls: {
    getData: string
    updateRow?: string
    addRow?: string
  }
}

export interface ServerResponse<T> {
  success: boolean
  error?: string
  data: T
}

export interface Item extends Record<string, string | undefined> {}

export interface ItemForm extends Record<string, any> {}

/* ------ FORMLY ------ */
export interface CustomFormlyTemplateOptions extends FormlyTemplateOptions {
  mask?: string
  label?: string
  class?: string
  labelKey?: string
  autoFocus?: boolean
  onLeave: () => void
}

export interface CustomFormlyFieldConfig extends Omit<FormlyFieldConfig, 'templateOptions'> {
  templateOptions?: CustomFormlyTemplateOptions
}

export interface CustomFieldTypeConfig extends Omit<FieldTypeConfig, 'templateOptions' | 'key'> {
  key: string
  templateOptions: NonNullable<CustomFormlyTemplateOptions>
}

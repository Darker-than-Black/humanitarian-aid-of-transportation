import { FormlyFieldConfig, FormlyTemplateOptions, FieldTypeConfig } from '@ngx-formly/core';

import { FIELD_TYPES } from './configs/fieldTypes';

export interface TableColumnConfig {
  key: string
  label: string
  type?: FIELD_TYPES
  inputMask?: string
  handler?: (data: any) => any
}

export interface ServerResponse<T> {
  success: boolean
  error?: string
  data: T
}

export interface ListServerResponse<T> extends ServerResponse<T> {
  temp_list: string[]
}

export interface Item extends Record<string, string | undefined> {
  id: string
  comment?: string
  creator?: string
  name?: string
  recipient_address?: string
  recipient_contact?: string
  recipient_name?: string
  recipient_phone?: string
  sender_address?: string
  sender_contact?: string
  sender_name?: string
  sender_phone?: string
  temperature?: string
  volume?: string
  weight?: string
}

export interface ItemForm {
  name: string
  comment: string
  creator: string
  volume: string
  weight: string
  temperature: string
  recipient_address: string
  recipient_contact: string
  recipient_name: string
  recipient_phone: string
  sender_address: string
  sender_contact: string
  sender_name: string
  sender_phone: string
}

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

import { EventEmitter } from '@angular/core';
import { EDITOR_TYPES } from './configs/editorTypes';

export interface TableColumnConfig {
  field: string
  header: string
  inputMask?: string
  inputType?: string
  editType?: EDITOR_TYPES
  handler?: (data: any) => any
}

export interface ServerResponse<T> {
  success: boolean
  data: T
}

export interface ListServerResponse<T> extends ServerResponse<T> {
  temp_list: string[]
}

export interface EditorComponent {
  data: Item;
  config: TableColumnConfig
  finally: EventEmitter<void>
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

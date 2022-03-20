import { TableColumnConfig } from '../types';
import { FIELD_TYPES } from './fieldTypes';

export const TABLE_CONFIG: TableColumnConfig[] = [
  {
    key: 'name',
    label: 'Ідентифікатор партії',
    type: FIELD_TYPES.TEXT,
  },
  {
    key: 'sender_name',
    label: 'Назва відправника',
    type: FIELD_TYPES.TEXT,
  },
  {
    key: 'sender_address',
    label: 'Адреса відправника',
    type: FIELD_TYPES.TEXT,
  },
  {
    key: 'sender_contact',
    label: 'Контактна особа відправника',
    type: FIELD_TYPES.TEXT,
  },
  {
    key: 'sender_phone',
    label: 'Контактний телефон відправника',
    type: FIELD_TYPES.MASK,
    inputMask: '+(999) 999-9999',
  },
  {
    key: 'recipient_name',
    label: 'Назва отримувача',
    type: FIELD_TYPES.TEXT,
  },
  {
    key: 'recipient_address',
    label: 'Адреса отримувача',
    type: FIELD_TYPES.TEXT,
  },
  {
    key: 'recipient_contact',
    label: 'Контактна особа отримувача',
    type: FIELD_TYPES.TEXT,
  },
  {
    key: 'recipient_phone',
    label: 'Контактний телефон отримувача',
    type: FIELD_TYPES.MASK,
    inputMask: '+(999) 999-9999',
  },
  {
    key: 'volume',
    label: 'Об\'єм партії, м3',
    type: FIELD_TYPES.NUMBER,
  },
  {
    key: 'weight',
    label: 'Вага партії, кг',
    type: FIELD_TYPES.NUMBER,
  },
  {
    key: 'temperature',
    label: 'Температурний контроль',
    type: FIELD_TYPES.SELECT,
  },
  {
    key: 'comment',
    label: 'Коментар',
    type: FIELD_TYPES.TEXTAREA,
  },
];

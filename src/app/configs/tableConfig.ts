import {TableColumnConfig} from '../types';
import {EDITOR_TYPES} from './editorTypes';

export const TABLE_CONFIG: TableColumnConfig[] = [
  {
    field: 'name',
    header: 'Ідентифікатор партії',
    editType: EDITOR_TYPES.INPUT,
  },
  {
    field: 'sender_name',
    header: 'Назва відправника',
    editType: EDITOR_TYPES.INPUT,
  },
  {
    field: 'sender_address',
    header: 'Адреса відправника',
    editType: EDITOR_TYPES.INPUT,
  },
  {
    field: 'sender_contact',
    header: 'Контактна особа відправника',
    editType: EDITOR_TYPES.INPUT,
  },
  {
    field: 'sender_phone',
    header: 'Контактний телефон відправника',
    editType: EDITOR_TYPES.MASK,
    inputMask: '+(999) 999-9999',
  },
  {
    field: 'recipient_name',
    header: 'Назва отримувача',
    editType: EDITOR_TYPES.INPUT,
  },
  {
    field: 'recipient_address',
    header: 'Адреса отримувача',
    editType: EDITOR_TYPES.INPUT,
  },
  {
    field: 'recipient_contact',
    header: 'Контактна особа отримувача',
    editType: EDITOR_TYPES.INPUT,
  },
  {
    field: 'recipient_phone',
    header: 'Контактний телефон отримувача',
    editType: EDITOR_TYPES.MASK,
    inputMask: '+(999) 999-9999',
  },
  {
    field: 'volume',
    header: 'Об\'єм партії, м3',
    editType: EDITOR_TYPES.INPUT,
    inputType: 'number',
  },
  {
    field: 'weight',
    header: 'Вага партії, кг',
    editType: EDITOR_TYPES.INPUT,
    inputType: 'number',
  },
  {
    field: 'temperature',
    header: 'Температурний контроль',
    editType: EDITOR_TYPES.SELECT,
  },
  {
    field: 'comment',
    header: 'Коментар',
    editType: EDITOR_TYPES.TEXTAREA,
  },
];

import { MedFormFieldConfig, FIELD_TYPES } from 'med-dynamic-form';
import * as KEYS from './filedKeys';

export const NEW_ROW_FORM_CONFIG: MedFormFieldConfig[] = [
  {
    key: KEYS.KEY_NAME,
    label: 'Ідентифікатор партії',
    editorType: FIELD_TYPES.TEXT,
    required: true
  },
  {
    key: KEYS.KEY_SENDER_NAME,
    label: 'Назва відправника',
    editorType: FIELD_TYPES.TEXT,
    required: true
  },
  {
    key: KEYS.KEY_SENDER_ADDRESS,
    label: 'Адреса відправника',
    editorType: FIELD_TYPES.TEXT,
    required: true
  },
  {
    key: KEYS.KEY_SENDER_CONTACT,
    label: 'Контактна особа відправника',
    editorType: FIELD_TYPES.TEXT,
    required: true
  },
  {
    key: KEYS.KEY_SENDER_PHONE,
    label: 'Контактний телефон відправника',
    editorType: FIELD_TYPES.TEXT,
    required: true
  },
  {
    key: KEYS.KEY_SENDER_REGION,
    label: 'Регіон відправника',
    editorType: FIELD_TYPES.SELECT,
    required: true
  },
  {
    key: KEYS.KEY_RECIPIENT_NAME,
    label: 'Назва отримувача',
    editorType: FIELD_TYPES.AUTOCOMPLETE,
    required: true
  },
  {
    key: KEYS.KEY_RECIPIENT_ADDRESS,
    label: 'Адреса отримувача',
    editorType: FIELD_TYPES.TEXT,
    required: true
  },
  {
    key: KEYS.KEY_RECIPIENT_CONTACT,
    label: 'Контактна особа отримувача',
    editorType: FIELD_TYPES.TEXT,
    required: true
  },
  {
    key: KEYS.KEY_RECIPIENT_PHONE,
    label: 'Контактний телефон отримувача',
    editorType: FIELD_TYPES.TEXT,
    required: true
  },
  {
    key: KEYS.KEY_RECIPIENT_REGION,
    label: 'Регіон отримувача',
    editorType: FIELD_TYPES.SELECT,
    required: true
  },
  {
    key: KEYS.KEY_VOLUME,
    label: 'Об\'єм партії, палети',
    editorType: FIELD_TYPES.NUMBER,
    required: true
  },
  {
    key: KEYS.KEY_WEIGHT,
    label: 'Вага партії, кг',
    editorType: FIELD_TYPES.NUMBER,
    required: true
  },
  {
    key: KEYS.KEY_TEMPERATURE,
    label: 'Температурний контроль',
    editorType: FIELD_TYPES.SELECT,
    required: true
  },
  {
    key: KEYS.KEY_COMMENT,
    label: 'Коментар',
    editorType: FIELD_TYPES.TEXTAREA,
    class: 'field col-12'
  }
];

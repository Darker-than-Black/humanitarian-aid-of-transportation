import { MedFormFieldConfig, FIELD_TYPES } from 'med-dynamic-form';

export const NEW_ROW_FORM_CONFIG: MedFormFieldConfig[] = [
  {
    key: 'name',
    label: 'Ідентифікатор партії',
    editorType: FIELD_TYPES.TEXT,
    class: 'field col-12 md:col-6',
    required: true
  },
  {
    key: 'sender_name',
    label: 'Назва відправника',
    editorType: FIELD_TYPES.TEXT,
    class: 'field col-12 md:col-6',
    required: true
  },
  {
    key: 'sender_address',
    label: 'Адреса відправника',
    editorType: FIELD_TYPES.TEXT,
    class: 'field col-12 md:col-6',
    required: true
  },
  {
    key: 'sender_contact',
    label: 'Контактна особа відправника',
    editorType: FIELD_TYPES.TEXT,
    class: 'field col-12 md:col-6',
    required: true
  },
  {
    key: 'sender_phone',
    label: 'Контактний телефон відправника',
    editorType: FIELD_TYPES.TEXT,
    class: 'field col-12 md:col-6',
    required: true
  },
  {
    key: 'recipient_name',
    label: 'Назва отримувача',
    editorType: FIELD_TYPES.TEXT,
    class: 'field col-12 md:col-6',
    required: true
  },
  {
    key: 'recipient_address',
    label: 'Адреса отримувача',
    editorType: FIELD_TYPES.TEXT,
    class: 'field col-12 md:col-6',
    required: true
  },
  {
    key: 'recipient_contact',
    label: 'Контактна особа отримувача',
    editorType: FIELD_TYPES.TEXT,
    class: 'field col-12 md:col-6',
    required: true
  },
  {
    key: 'recipient_phone',
    label: 'Контактний телефон отримувача',
    editorType: FIELD_TYPES.TEXT,
    class: 'field col-12 md:col-6',
    required: true
  },
  {
    key: 'volume',
    label: 'Об\'єм партії, палети',
    editorType: FIELD_TYPES.NUMBER,
    class: 'field col-12 md:col-6',
    required: true
  },
  {
    key: 'weight',
    label: 'Вага партії, кг',
    editorType: FIELD_TYPES.NUMBER,
    class: 'field col-12 md:col-6',
    required: true
  },
  {
    key: 'temperature',
    label: 'Температурний контроль',
    editorType: FIELD_TYPES.SELECT,
    class: 'field col-12 md:col-6',
    required: true
  },
  {
    key: 'comment',
    label: 'Коментар',
    editorType: FIELD_TYPES.TEXTAREA,
    class: 'field col-12'
  }
];

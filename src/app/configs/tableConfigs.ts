import { FIELD_TYPES, MedTableColumnConfig } from 'med-table';

export const TABLE_CONFIG: MedTableColumnConfig[] = [
  {
    key: "name",
    label: "Ідентифікатор партії",
    editorType: FIELD_TYPES.TEXT,
    visibleEditorHandler: ({ status }: Record<string, any>) => status === 'packed',
    filterable: true,
  },
  {
    key: "status_name",
    label: "Статус",
    filterable: true,
  },
  {
    key: "sender_name",
    label: "Назва відправника",
    editorType: FIELD_TYPES.TEXT,
    visibleEditorHandler: ({ status }: Record<string, any>) => status === 'packed',
    filterable: true,
  },
  {
    key: "sender_address",
    label: "Адреса відправника",
    editorType: FIELD_TYPES.TEXT,
    visibleEditorHandler: ({ status }: Record<string, any>) => status === 'packed',
    filterable: true,
  },
  {
    key: "sender_contact",
    label: "Контактна особа відправника",
    editorType: FIELD_TYPES.TEXT,
    visibleEditorHandler: ({ status }: Record<string, any>) => status === 'packed',
    filterable: true,
  },
  {
    key: "sender_phone",
    label: "Контактний телефон відправника",
    editorType: FIELD_TYPES.MASK,
    inputMask: "+(999) 999-9999",
    visibleEditorHandler: ({ status }: Record<string, any>) => status === 'packed',
    filterable: true,
  },
  {
    key: "recipient_name",
    label: "Назва отримувача",
    editorType: FIELD_TYPES.TEXT,
    filterable: true,
    visibleEditorHandler: ({ status }: Record<string, any>) => status === 'packed'
  },
  {
    key: "recipient_address",
    label: "Адреса отримувача",
    editorType: FIELD_TYPES.TEXT,
    filterable: true,
    visibleEditorHandler: ({ status }: Record<string, any>) => status === 'packed'
  },
  {
    key: "recipient_contact",
    label: "Контактна особа отримувача",
    editorType: FIELD_TYPES.TEXT,
    filterable: true,
    visibleEditorHandler: ({ status }: Record<string, any>) => status === 'packed'
  },
  {
    key: "recipient_phone",
    label: "Контактний телефон отримувача",
    editorType: FIELD_TYPES.MASK,
    inputMask: "+(999) 999-9999",
    filterable: true,
    visibleEditorHandler: ({ status }: Record<string, any>) => status === 'packed'
  },
  {
    key: "transport",
    label: "Транспорт",
    filterable: true,
    viewHandler: ({ name, type }: any) => `${ type || '' } ${ name ? `(${ name })` : '' }`.trim() || '–',
  },
  {
    key: "driver",
    label: "Водій",
    filterable: true,
    viewHandler: ({ name, phone }: any) => `${ name || '' } ${ phone ? `(${ phone })` : '' }`.trim() || '–',
  },
  {
    key: "volume",
    label: "Об'єм партії, палети",
    editorType: FIELD_TYPES.NUMBER,
    filterable: true,
    visibleEditorHandler: ({ status }: Record<string, any>) => status === 'packed'
  },
  {
    key: "weight",
    label: "Вага партії, кг",
    editorType: FIELD_TYPES.NUMBER,
    filterable: true,
    visibleEditorHandler: ({ status }: Record<string, any>) => status === 'packed'
  },
  {
    key: "temperature",
    label: "Температурний контроль",
    editorType: FIELD_TYPES.SELECT,
    filterable: true,
    visibleEditorHandler: ({ status }: Record<string, any>) => status === 'packed'
  },
  {
    key: "comment",
    label: "Коментар",
    editorType: FIELD_TYPES.TEXTAREA,
    filterable: true,
    visibleEditorHandler: ({ status }: Record<string, any>) => status === 'packed'
  }
];

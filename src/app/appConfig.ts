import { AppConfig } from './types';
import { FIELD_TYPES } from './configs/fieldTypes';

export const APP_CONFIG: AppConfig = {
  "apiUrls": {
    "getData": "https://meddata.com.ua/index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=humanitarian&function=getOtherLogistics",
    "updateRow": "https://meddata.com.ua/index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=humanitarian&function=saveOtherLogistics",
    "addRow": "https://meddata.com.ua/index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=humanitarian&function=saveOtherLogistics"
  },
  "table": [
    {
      "key": "name",
      "label": "Ідентифікатор партії",
      "type": FIELD_TYPES.TEXT,
      "visibleEditorHandler": ({ status }: Record<string, any>) => status === 'packed',
    },
    {
      "key": "sender_name",
      "label": "Назва відправника",
      "type": FIELD_TYPES.TEXT,
      "visibleEditorHandler": ({ status }: Record<string, any>) => status === 'packed',
    },
    {
      "key": "sender_address",
      "label": "Адреса відправника",
      "type": FIELD_TYPES.TEXT,
      "visibleEditorHandler": ({ status }: Record<string, any>) => status === 'packed'
    },
    {
      "key": "sender_contact",
      "label": "Контактна особа відправника",
      "type": FIELD_TYPES.TEXT,
      "visibleEditorHandler": ({ status }: Record<string, any>) => status === 'packed'
    },
    {
      "key": "sender_phone",
      "label": "Контактний телефон відправника",
      "type": FIELD_TYPES.MASK,
      "inputMask": "+(999) 999-9999",
      "visibleEditorHandler": ({ status }: Record<string, any>) => status === 'packed'
    },
    {
      "key": "recipient_name",
      "label": "Назва отримувача",
      "type": FIELD_TYPES.TEXT,
      "visibleEditorHandler": ({ status }: Record<string, any>) => status === 'packed'
    },
    {
      "key": "recipient_address",
      "label": "Адреса отримувача",
      "type": FIELD_TYPES.TEXT,
      "visibleEditorHandler": ({ status }: Record<string, any>) => status === 'packed'
    },
    {
      "key": "recipient_contact",
      "label": "Контактна особа отримувача",
      "type": FIELD_TYPES.TEXT,
      "visibleEditorHandler": ({ status }: Record<string, any>) => status === 'packed'
    },
    {
      "key": "recipient_phone",
      "label": "Контактний телефон отримувача",
      "type": FIELD_TYPES.MASK,
      "inputMask": "+(999) 999-9999",
      "visibleEditorHandler": ({ status }: Record<string, any>) => status === 'packed'
    },
    {
      "key": "transport",
      "label": "Транспорт",
      "handler": ({ name, type }: any) => `${ type || '' } ${ name ? `(${ name })` : '' }`.trim(),
    },
    {
      "key": "driver",
      "label": "Водій",
      "handler": ({ name, phone }: any) => `${ name || '' } ${ phone ? `(${ phone })` : '' }`.trim(),
    },
    {
      "key": "volume",
      "label": "Об'єм партії, м3",
      "type": FIELD_TYPES.NUMBER,
      "visibleEditorHandler": ({ status }: Record<string, any>) => status === 'packed'
    },
    {
      "key": "weight",
      "label": "Вага партії, кг",
      "type": FIELD_TYPES.NUMBER,
      "visibleEditorHandler": ({ status }: Record<string, any>) => status === 'packed'
    },
    {
      "key": "temperature",
      "label": "Температурний контроль",
      "type": FIELD_TYPES.SELECT,
      "visibleEditorHandler": ({ status }: Record<string, any>) => status === 'packed'
    },
    {
      "key": "comment",
      "label": "Коментар",
      "type": FIELD_TYPES.TEXTAREA,
      "visibleEditorHandler": ({ status }: Record<string, any>) => status === 'packed'
    }
  ],
  "rowForm": [
    {
      "key": "name",
      "label": "Ідентифікатор партії",
      "type": FIELD_TYPES.TEXT,
      "class": "field col-12 md:col-6",
      "required": true
    },
    {
      "key": "sender_name",
      "label": "Назва відправника",
      "type": FIELD_TYPES.TEXT,
      "class": "field col-12 md:col-6",
      "required": true
    },
    {
      "key": "sender_address",
      "label": "Адреса відправника",
      "type": FIELD_TYPES.TEXT,
      "class": "field col-12 md:col-6",
      "required": true
    },
    {
      "key": "sender_contact",
      "label": "Контактна особа відправника",
      "type": FIELD_TYPES.TEXT,
      "class": "field col-12 md:col-6",
      "required": true
    },
    {
      "key": "sender_phone",
      "label": "Контактний телефон відправника",
      "type": FIELD_TYPES.MASK,
      "inputMask": "+(999) 999-9999",
      "class": "field col-12 md:col-6",
      "required": true
    },
    {
      "key": "recipient_name",
      "label": "Назва отримувача",
      "type": FIELD_TYPES.TEXT,
      "class": "field col-12 md:col-6",
      "required": true
    },
    {
      "key": "recipient_address",
      "label": "Адреса отримувача",
      "type": FIELD_TYPES.TEXT,
      "class": "field col-12 md:col-6",
      "required": true
    },
    {
      "key": "recipient_contact",
      "label": "Контактна особа отримувача",
      "type": FIELD_TYPES.TEXT,
      "class": "field col-12 md:col-6",
      "required": true
    },
    {
      "key": "recipient_phone",
      "label": "Контактний телефон отримувача",
      "type": FIELD_TYPES.MASK,
      "inputMask": "+(999) 999-9999",
      "class": "field col-12 md:col-6",
      "required": true
    },
    {
      "key": "volume",
      "label": "Об'єм партії, м3",
      "type": FIELD_TYPES.NUMBER,
      "class": "field col-12 md:col-6",
      "required": true
    },
    {
      "key": "weight",
      "label": "Вага партії, кг",
      "type": FIELD_TYPES.NUMBER,
      "class": "field col-12 md:col-6",
      "required": true
    },
    {
      "key": "temperature",
      "label": "Температурний контроль",
      "type": FIELD_TYPES.SELECT,
      "class": "field col-12 md:col-6",
      "required": true
    },
    {
      "key": "comment",
      "label": "Коментар",
      "type": FIELD_TYPES.TEXTAREA,
      "class": "field col-12"
    }
  ],
};

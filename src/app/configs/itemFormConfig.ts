import { InputComponent } from '../components/forms/input/input.component';
import { TextareaComponent } from '../components/forms/textarea/textarea.component';
import { SelectComponent } from '../components/forms/select/select.component';

export const ITEM_FORM_CONFIG = [
  {
    class: 'field col-12 md:col-6',
    field: 'name',
    header: 'Ідентифікатор партії',
    component: InputComponent,
  },
  {
    class: 'field col-12 md:col-6',
    field: 'sender_name',
    header: 'Назва відправника',
    component: InputComponent,
  },
  {
    class: 'field col-12 md:col-6',
    field: 'sender_address',
    header: 'Адреса відправника',
    component: InputComponent,
  },
  {
    class: 'field col-12 md:col-6',
    field: 'sender_contact',
    header: 'Контактна особа відправника',
    component: InputComponent,
  },
  {
    class: 'field col-12 md:col-6',
    field: 'sender_phone',
    header: 'Контактний телефон відправника',
    component: InputComponent,
  },
  {
    class: 'field col-12 md:col-6',
    field: 'recipient_name',
    header: 'Назва отримувача',
    component: InputComponent,
  },
  {
    class: 'field col-12 md:col-6',
    field: 'recipient_address',
    header: 'Адреса отримувача',
    component: InputComponent,
  },
  {
    class: 'field col-12 md:col-6',
    field: 'recipient_contact',
    header: 'Контактна особа отримувача',
    component: InputComponent,
  },
  {
    class: 'field col-12 md:col-6',
    field: 'recipient_phone',
    header: 'Контактний телефон отримувача',
    component: InputComponent,
  },
  {
    class: 'field col-12 md:col-6',
    field: 'volume',
    header: 'Об\'єм партії',
    component: InputComponent,
  },
  {
    class: 'field col-12 md:col-6',
    field: 'weight',
    header: 'Вага партії',
    component: InputComponent,
  },
  {
    class: 'field col-12 md:col-6',
    field: 'temperature',
    header: 'Температурний контроль',
    component: SelectComponent,
  },
  {
    class: 'field col-12',
    field: 'comment',
    header: 'Коментар',
    component: TextareaComponent,
  },
];

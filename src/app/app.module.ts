import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormlyModule} from '@ngx-formly/core';

import {FIELD_TYPES} from './configs/fieldTypes';

import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {MessageService} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import {AppComponent} from './app.component';
import {EditorTypeDirective} from './directives/editor-type.directive';
import {TableComponent} from './components/table/table.component';
import {TableDataComponent} from './components/table-data/table-data.component';
import {ItemFormComponent} from './components/item-form/item-form.component';
import {InputComponent} from './components/forms/input/input.component';
import {TextareaComponent} from './components/forms/textarea/textarea.component';
import {SelectComponent} from './components/forms/select/select.component';
import {InputMaskComponent} from './components/forms/input-mask/input-mask.component';
import {DynamicInputComponent} from './components/forms/dynamic-input/dynamic-input.component';
import {DynamicSelectComponent} from './components/forms/dynamic-select/dynamic-select.component';
import {DynamicInputMaskComponent} from './components/forms/dynamic-input-mask/dynamic-input-mask.component';
import {DynamicTextareaComponent} from './components/forms/dynamic-textarea/dynamic-textarea.component';
import {WrapperDynamicInputComponent} from './components/forms/wrapper-dynamic-input/wrapper-dynamic-input.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TableComponent,
    SelectComponent,
    ItemFormComponent,
    TextareaComponent,
    TableDataComponent,
    EditorTypeDirective,
    InputMaskComponent,
    DynamicInputComponent,
    DynamicSelectComponent,
    DynamicInputMaskComponent,
    DynamicTextareaComponent,
    WrapperDynamicInputComponent,
  ],
  imports: [
    TableModule,
    ToastModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    BrowserModule,
    InputTextModule,
    InputMaskModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot({
      types: [
        { name: FIELD_TYPES.TEXT, component: DynamicInputComponent },
        { name: FIELD_TYPES.NUMBER, component: DynamicInputComponent },
        { name: FIELD_TYPES.MASK, component: DynamicInputMaskComponent },
        { name: FIELD_TYPES.SELECT, component: DynamicSelectComponent },
        { name: FIELD_TYPES.TEXTAREA, component: DynamicTextareaComponent },
      ],
      wrappers: [
        { name: 'input-wrapper', component: WrapperDynamicInputComponent },
      ],
    }),
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

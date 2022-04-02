import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {MedTableModule} from 'med-table';
import {MedDynamicFormModule} from 'med-dynamic-form';

import {AppComponent} from './app.component';
import {ItemFormComponent} from './components/item-form/item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
  ],
  imports: [
    MedTableModule,
    MedDynamicFormModule,
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
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

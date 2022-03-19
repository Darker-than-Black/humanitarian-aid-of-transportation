import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { AppComponent } from './app.component';
import { EditorTypeDirective } from './directives/editor-type.directive';
import { TableComponent } from './components/table/table.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { TextEditorComponent } from './components/editors/text-editor/text-editor.component';
import { TextareaEditorComponent } from './components/editors/textarea-editor/textarea-editor.component';
import { SelectEditorComponent } from './components/editors/select-editor/select-editor.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { InputComponent } from './components/forms/input/input.component';
import { TextareaComponent } from './components/forms/textarea/textarea.component';
import { SelectComponent } from './components/forms/select/select.component';
import { InputMaskComponent } from './components/forms/input-mask/input-mask.component';
import { InputMaskEditorComponent } from './components/editors/input-mask-editor/input-mask-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TableComponent,
    SelectComponent,
    ItemFormComponent,
    TextareaComponent,
    TableDataComponent,
    TextEditorComponent,
    EditorTypeDirective,
    SelectEditorComponent,
    TextareaEditorComponent,
    InputMaskComponent,
    InputMaskEditorComponent,
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
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
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

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableDataComponent,
    TextEditorComponent,
    EditorTypeDirective,
    SelectEditorComponent,
    TextareaEditorComponent,
    ItemFormComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
  ],
  imports: [
    TableModule,
    ToastModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    BrowserModule,
    InputTextModule,
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

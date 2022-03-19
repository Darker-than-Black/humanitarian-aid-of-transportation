import { Component } from '@angular/core';

import { EditorComponent } from '../../../types';
import { EditorMixin } from '../../../mixins/EditorMixin';

@Component({
  selector: 'app-textarea-editor',
  templateUrl: './textarea-editor.component.html',
  styleUrls: ['./textarea-editor.component.scss']
})
export class TextareaEditorComponent extends EditorMixin implements EditorComponent {
}

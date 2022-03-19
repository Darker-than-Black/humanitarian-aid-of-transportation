import { Component } from '@angular/core';

import { EditorComponent } from '../../../types';
import { EditorMixin } from '../../../mixins/EditorMixin';

@Component({
  selector: 'app-select-editor',
  templateUrl: './select-editor.component.html',
  styleUrls: ['./select-editor.component.scss']
})
export class SelectEditorComponent extends EditorMixin implements EditorComponent {
}

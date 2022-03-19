import { Component, Input } from '@angular/core';

import { EditorComponent } from '../../../types';
import { EditorMixin } from '../../../mixins/EditorMixin';

@Component({
  selector: 'app-input-mask-editor',
  templateUrl: './input-mask-editor.component.html',
  styleUrls: ['./input-mask-editor.component.scss']
})
export class InputMaskEditorComponent extends EditorMixin implements EditorComponent {
  @Input() type: string = 'text';
  @Input() mask: string = '';
}

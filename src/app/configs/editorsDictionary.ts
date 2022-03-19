import { EDITOR_TYPES } from './editorTypes';
import { TextEditorComponent } from '../components/editors/text-editor/text-editor.component';
import { SelectEditorComponent } from '../components/editors/select-editor/select-editor.component';
import { TextareaEditorComponent } from '../components/editors/textarea-editor/textarea-editor.component';

export const editorsDictionary = new Map<string, any>()
  .set(EDITOR_TYPES.INPUT, TextEditorComponent)
  .set(EDITOR_TYPES.SELECT, SelectEditorComponent)
  .set(EDITOR_TYPES.TEXTAREA, TextareaEditorComponent);

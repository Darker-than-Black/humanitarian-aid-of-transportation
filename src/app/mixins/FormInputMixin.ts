import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  template: '',
})
export class FormInputMixin implements ControlValueAccessor {
  private _value: string = '';

  @ViewChild('input') inputEl!: ElementRef;

  @Output() leave = new EventEmitter<void>();

  @Input() hasSetFocus: boolean = false;
  @Input() inputId: string = '';
  @Input() set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  get value() {
    return this._value;
  }

  ngAfterViewInit(): void {
    if (this.hasSetFocus) {
      this.inputEl.nativeElement.focus();
    }
  }

  onChange(_: string) {}

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched() {}
}

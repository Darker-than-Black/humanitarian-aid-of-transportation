import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMaskEditorComponent } from './input-mask-editor.component';

describe('InputMaskEditorComponent', () => {
  let component: InputMaskEditorComponent;
  let fixture: ComponentFixture<InputMaskEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMaskEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMaskEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

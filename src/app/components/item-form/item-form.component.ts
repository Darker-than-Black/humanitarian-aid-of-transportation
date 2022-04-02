import { Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { MedFormFieldConfig } from 'med-dynamic-form';
import { FormGroup } from '@angular/forms';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  constructor(private apiService: ApiService, private cb: ChangeDetectorRef) {}

  @Input() config!: MedFormFieldConfig[];
  @Output() closeModal = new EventEmitter<void>();

  loading: boolean = false;
  form = new FormGroup({});

  ngAfterViewInit() {
    this.cb.detectChanges();
  }

  addItem(): void {
    this.loading = true;

    this.apiService.addItem(this.form.value).subscribe(() => {
      this.loading = false;
      this.closeModal.emit();
    });
  }
}

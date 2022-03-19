import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  constructor(private apiService: ApiService, private fb: FormBuilder) {}

  loading: boolean = false;
  form = this.fb.group({
    name: ['', Validators.required],
    sender_name: ['', Validators.required],
    sender_address: ['', Validators.required],
    sender_contact: ['', Validators.required],
    sender_phone: ['', Validators.required],
    recipient_name: ['', Validators.required],
    recipient_address: ['', Validators.required],
    recipient_contact: ['', Validators.required],
    recipient_phone: ['', Validators.required],
    volume: ['', Validators.required],
    weight: ['', Validators.required],
    temperature: ['', Validators.required],
    comment: [''],
  });

  @Input() showDialog!: boolean;

  addItem(): void {
    this.loading = true;
    this.apiService.addItem(this.form.value).subscribe(() => {
      this.loading = false;
      this.showDialog = false;
    });
  }
}

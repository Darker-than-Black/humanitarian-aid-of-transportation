import { Component, OnInit } from '@angular/core';
import { MedUpdateColumnEvent } from 'med-table';

import { APP_CONFIG } from './appConfig';
import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';
import { TABLE_CONFIG } from './configs/tableConfigs';
import { NEW_ROW_FORM_CONFIG } from './configs/formConfigs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public store: StoreService, private apiService: ApiService) {
    this.apiService.setRoutes(APP_CONFIG.apiUrls);
  }

  loading: boolean = false;
  showDialog: boolean = false;
  tableConfig = TABLE_CONFIG;
  rowFormConfig = NEW_ROW_FORM_CONFIG;

  ngOnInit() {
    this.loading = true;

    this.apiService.getData().subscribe(() => {
      this.loading = false;
    });
  }

  onUpdateColumn({ item }: MedUpdateColumnEvent<Record<string, any>>): void {
    this.apiService.updateItem(item).subscribe(() => {});
  }
}

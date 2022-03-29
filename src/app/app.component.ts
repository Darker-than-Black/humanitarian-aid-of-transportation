import { Component, OnInit } from '@angular/core';

import { APP_CONFIG } from './appConfig';
import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';
import { FormFieldConfig, TableColumnConfig } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public store: StoreService, private apiService: ApiService) {
    this.apiService.setRoutes(APP_CONFIG.apiUrls);
    this.tableConfig = APP_CONFIG.table;
    this.rowFormConfig = APP_CONFIG.rowForm;
  }

  loading: boolean = false;
  showDialog: boolean = false;
  tableConfig: TableColumnConfig[] = [];
  rowFormConfig: FormFieldConfig[] = [];

  ngOnInit() {
    this.loading = true;

    this.apiService.getData().subscribe(() => {
      this.loading = false;
    });
  }
}

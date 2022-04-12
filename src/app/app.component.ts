import { Component, OnInit } from '@angular/core';
import { MedUpdateColumnEvent } from 'med-table';

import { Item } from './types';
import { APP_CONFIG } from './appConfig';
import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';
import { TABLE_CONFIG } from './configs/tableConfigs';

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

  ngOnInit() {
    this.loading = true;

    this.apiService.getData().subscribe(() => {
      this.loading = false;
    });
  }

  onUpdateColumn({ item }: MedUpdateColumnEvent<Item>): void {
    this.apiService.updateItem(item).subscribe(() => {});
  }
}

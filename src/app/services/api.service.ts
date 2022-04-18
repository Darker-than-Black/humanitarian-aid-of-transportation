import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { MedTableService } from 'med-table';
import { MedDynamicFormService } from 'med-dynamic-form';

import { SelectData } from './select-data';
import { getListProperties } from '../utils';
import { StoreService } from './store.service';
import { Item, ItemForm, ServerResponse } from '../types';
import { NotificationService } from './notification.service';
import { NOTIFICATION_TYPES } from '../configs/notificationTypes';
import { notificationMessages } from '../configs/notificationMessages';
import { KEY_RECIPIENT_NAME, KEY_TEMPERATURE, KEY_RECIPIENT_REGION, KEY_SENDER_REGION } from '../configs/filedKeys';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private store: StoreService,
    private notification: NotificationService,
    private tableService: MedTableService,
    private dynamicFormService: MedDynamicFormService,
  ) {}

  private routes: Record<string, string> = {
    getData: '',
    updateRow: '',
    addRow: '',
  };
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getData(): Observable<void> {
    const url = this.addDevMode(this.routes['getData']);
    return this.http.get<ServerResponse<Item[]>>(url).pipe(
      map(({ data, temp_list, regions }: any) => {
        this.store.setList(data);
        this.tableService.setSelectData(SelectData.region(regions), KEY_RECIPIENT_REGION);
        this.tableService.setSelectData(SelectData.region(regions), KEY_SENDER_REGION);
        this.tableService.setSelectData(SelectData.temperature(temp_list), KEY_TEMPERATURE);
        this.dynamicFormService.setSelectData(SelectData.temperature(temp_list), KEY_TEMPERATURE);
        this.dynamicFormService.setSelectData(SelectData.region(regions), KEY_RECIPIENT_REGION);
        this.dynamicFormService.setSelectData(SelectData.region(regions), KEY_SENDER_REGION);
        this.dynamicFormService.setDatalist(getListProperties(data, KEY_RECIPIENT_NAME), KEY_RECIPIENT_NAME);
      }),
      catchError(this.handleError<void>(notificationMessages.serverError, 'getData')),
    );
  }

  updateItem(item: Item): Observable<Item> {
    const url = this.addDevMode(this.routes['updateRow']);
    return this.http.post<ServerResponse<Item>>(url, item, this.httpOptions).pipe(
      map(({ data }) => data),
      tap(() => this.notification.add(notificationMessages.updateSuccess, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<any>(notificationMessages.serverError, 'updateItem')),
    );
  }

  addItem(item: ItemForm): Observable<void> {
    const url = this.addDevMode(this.routes['addRow']);
    return this.http.post<ServerResponse<Item>>(url, item, this.httpOptions).pipe(
      map(({ data }) => this.store.addListItem(data)),
      tap(() => this.notification.add(notificationMessages.fieldSuccess, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<void>(notificationMessages.serverError, 'addItem')),
    );
  }

  setRoutes(routes: Record<string, string>): void {
    Object.entries(routes).forEach(([key, route]) => {
      this.routes[key] = this.addDevMode(route);
    });
  }

  private addDevMode(url: string): string {
    return isDevMode() ? `${url}&dev=1` : url;
  }

  private handleError<T>(message: string, operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.notification.add(message, NOTIFICATION_TYPES.ERROR);
      this.log(`${operation} failed: ${error.message}`, 'error');

      return of(result as T);
    };
  }

  private log(message: string, type = 'log'): void {
    (console as Record<string, any>)[type](`ApiService: ${message}`);
  }
}

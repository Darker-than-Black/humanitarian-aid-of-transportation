import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { StoreService } from './store.service';
import { NotificationService } from './notification.service';
import { NOTIFICATION_TYPES } from '../configs/notificationTypes';
import { notificationMessages } from '../configs/notificationMessages';
import { Item, ItemForm, ServerResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private store: StoreService,
    private notification: NotificationService,
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
      map(({ data, temp_list }: any) => {
        this.store.setList(data);
        this.store.setSelectOptions({ temperature: temp_list });
      }),
      catchError(this.handleError<void>(notificationMessages.serverError, 'getData')),
    );
  }

  updateItem(item: Item): Observable<void> {
    const url = this.addDevMode(this.routes['updateRow']);
    return this.http.post<ServerResponse<Item>>(url, item, this.httpOptions).pipe(
      map(({ data }) => this.store.updateListItem(data)),
      tap(() => this.notification.add(notificationMessages.updateSuccess, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<void>(notificationMessages.serverError, 'updateItem')),
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

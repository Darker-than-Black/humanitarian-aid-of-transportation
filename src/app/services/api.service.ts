import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import * as ROUTES from '../configs/apiRoutes';
import { StoreService } from './store.service';
import { NotificationService } from './notification.service';
import { NOTIFICATION_TYPES } from '../configs/notificationTypes';
import { notificationMessages } from '../configs/notificationMessages';
import { Item, ItemForm, ListServerResponse, ServerResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private store: StoreService,
    private notification: NotificationService,
  ) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getList(): Observable<void> {
    const url = this.addDevMode(ROUTES.GET_LOGISTICS);
    return this.http.get<ListServerResponse<Item[]>>(url).pipe(
      map(({ data, temp_list }) => {
        this.store.setList(data);
        this.store.setTempList(temp_list);
      }),
      catchError(this.handleError<void>(notificationMessages.serverError, 'getList')),
    );
  }

  updateItem(item: Item): Observable<void> {
    const url = this.addDevMode(ROUTES.UPDATE_LOGISTIC);
    return this.http.post<ServerResponse<Item>>(url, item, this.httpOptions).pipe(
      map(({ data }) => this.store.updateListItem(data)),
      catchError(this.handleError<void>(notificationMessages.serverError, 'updateItem')),
    );
  }

  addItem(item: ItemForm): Observable<void> {
    const url = this.addDevMode(ROUTES.UPDATE_LOGISTIC);
    return this.http.post<ServerResponse<Item>>(url, item, this.httpOptions).pipe(
      map(({ data }) => this.store.addListItem(data)),
      catchError(this.handleError<void>(notificationMessages.serverError, 'addItem')),
    );
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

// noinspection JSUnusedGlobalSymbols

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, retry, throwError} from 'rxjs';
import {catchError, delay, tap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {IError} from '~models/generic/http-error.model';


type TExtendable = object | void;

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  get$<T>(url: string, options?: Record<string, unknown>): Observable<T> {
    return this.http.get<T>(this.parseUrl(url), options)
      .pipe(
        retry({delay: this.retryStrategy}),
        catchError(err => this.handleError(err))
      );
  }

  post$<
    T extends TExtendable = Record<string, unknown>,
    U extends object | undefined = Record<string, unknown>
  >(url: string, body?: U, options?: Record<string, unknown>): Observable<T> {
    return this.http.post<T>(this.parseUrl(url), body, options)
      .pipe(
        retry({delay: this.retryStrategy}),
        catchError(err => this.handleError(err))
      );
  }

  put$<
    T extends TExtendable = Record<string, unknown>,
    U extends object = Record<string, unknown>
  >(url: string, body: U, options?: Record<string, unknown>): Observable<T> {
    return this.http.put<T>(this.parseUrl(url), body, options)
      .pipe(
        retry({delay: this.retryStrategy}),
        catchError(err => this.handleError(err))
      );
  }

  patch$<
    T extends TExtendable = Record<string, unknown>,
    U extends object = Record<string, unknown>
  >(url: string, body: U, options?: Record<string, unknown>): Observable<T> {
    return this.http.patch<T>(this.parseUrl(url), body, options)
      .pipe(
        retry({delay: this.retryStrategy}),
        catchError(err => this.handleError(err))
      );
  }

  delete$<
    T extends TExtendable = void
  >(url: string, options?: Record<string, unknown>): Observable<T> {
    return this.http.delete<T>(this.parseUrl(url), options)
      .pipe(
        retry({delay: this.retryStrategy}),
        catchError(err => this.handleError(err))
      );
  }

  // noinspection JSMethodCanBeStatic
  private parseUrl(url: string): string {
    const httpRegExp = new RegExp('^(http|https|ws|wss)://', 'i');
    return httpRegExp.test(url) ? url : environment.apiUrl + url;
  }

  // noinspection JSMethodCanBeStatic
  private handleError(error: HttpErrorResponse & { error: IError }): Observable<never> {
    // this.alertService.error(error.error);
    return throwError(error.error);
  }

  // noinspection JSMethodCanBeStatic
  private retryStrategy(error: Observable<HttpErrorResponse>): Observable<unknown> {
    let tries = 0;
    return error.pipe(
      tap(e => {
        tries++;
        if (e.status !== 502 || tries >= 3) {
          throw e;
        }
      }),
      delay(200)
    );
  }
}

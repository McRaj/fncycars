import {environment} from '../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Car} from './car';
import {tap, catchError} from 'rxjs/operators';
import {throwError as observableThrowError,  Observable } from 'rxjs';

@Injectable()
export class CarService {
  private baseUrl = environment.baseUrl;
  private _url = this.baseUrl + 'cars/';
  constructor(private http: HttpClient) { }
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this._url).pipe(tap(data => console.log(data)), catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}

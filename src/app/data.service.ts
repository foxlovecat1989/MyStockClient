import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from './model/Stock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getStocks() : Observable<Array<Stock>>{
    return this.http.get<Array<Stock>>(environment.restUrl + '/api/v1/stocks/findAll');
  }

  public addStockToWatch(stockId: number, watchId: number, userId: number): Observable<any> {
    // TODO: add stock to watch beackend
    return of(null);
  }
}

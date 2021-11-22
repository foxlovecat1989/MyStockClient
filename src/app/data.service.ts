import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classify } from './model/Classify';
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

  public getClassifies(): Observable<Array<Classify>> {
    return this.http.get<Array<Classify>>(environment.restUrl + '/api/v1/classifies/findAll');
  }

  public findStocksByClassifyId(classifyId: number): Observable<Array<Stock>> {
    return this.http.get<Array<Stock>>(environment.restUrl + '/api/v1/classifies/' + classifyId);
  }
}

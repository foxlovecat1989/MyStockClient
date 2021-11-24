import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock } from 'src/app/model/Stock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  public getStocks() : Observable<Array<Stock>>{
    return this.http.get<Array<Stock>>(environment.restUrl + '/api/v1/stocks/findAll');
  }

  public updateStock(stock: Stock): Observable<Stock>{
    return this.http.patch<Stock>(environment.restUrl + '/api/v1/stocks', stock);
  }

  public addStock(stock: Stock): Observable<Stock>{
    return this.http.post<Stock>(environment.restUrl + '/api/v1/stocks', stock);
  }

  public deleteStock(id: number): Observable<any>{
    return this.http.delete(environment.restUrl + '/api/v1/stocks/' + id);
  }

  public addStockToWatch(stockId: number, watchId: number, userId: number): Observable<any> {
    // TODO: add stock to watch beackend
    return of(null);
  }
}

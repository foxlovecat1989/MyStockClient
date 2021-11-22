import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classify } from './model/Classify';
import { Stock } from './model/Stock';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

  public findStocksByClassifyId(classifyId: number): Observable<Array<Stock>> {
    return this.http.get<Array<Stock>>(environment.restUrl + '/api/v1/classifies/' + classifyId);
  }

  public addStockToWatch(stockId: number, watchId: number, userId: number): Observable<any> {
    // TODO: add stock to watch beackend
    return of(null);
  }

  public getClassifies(): Observable<Array<Classify>> {
    return this.http.get<Array<Classify>>(environment.restUrl + '/api/v1/classifies/findAll')
    .pipe(
      map(
        datas => {
          const classfies = new Array<Classify>();
          datas.forEach(data => classfies.push(Classify.fromHttp(data)))

          return classfies;
        }
      )
    );
  }

  public updateClassify(classify: Classify): Observable<Classify> {
    return this.http.patch<Classify>(environment.restUrl + '/api/v1/classifies', classify);
  }

  public addClassify(classify: Classify): Observable<Classify> {
    return this.http.post<Classify>(environment.restUrl + '/api/v1/classifies', classify);
  }

  public findAllUsers(): Observable<Array<User>>{
    return this.http.get<Array<User>>(environment.restUrl + '/api/v1/users/findAll')
      .pipe(
        map(
          datas => {
            const users = new Array<User>();
            datas.forEach(data => users.push(User.fromHttp(data)))

            return users;
          }
        )
      );
  }

}

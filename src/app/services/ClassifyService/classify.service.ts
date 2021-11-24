import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Classify } from 'src/app/model/Classify';
import { Stock } from 'src/app/model/Stock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassifyService {

  constructor(private http: HttpClient) { }

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

  public findStocksByClassifyId(classifyId: number): Observable<Array<Stock>> {
    return this.http.get<Array<Stock>>(environment.restUrl + '/api/v1/classifies/' + classifyId);
  }
}

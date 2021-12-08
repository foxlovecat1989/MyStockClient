import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/model/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

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

  public removeUser(id: number): Observable<any>{
    return this.http.delete<any>(environment.restUrl + '/api/v1/users/' + id);
  }

  public editUser(user: User): Observable<User>{
    return this.http.patch<User>(environment.restUrl + '/api/v1/users', user);
  }

  public addUser(user: User, password: string): Observable<User>{
    const fullUser = {id : user.id, 'username' : user.username, email : user.email, password : password };
    return this.http.post<User>(environment.restUrl + '/api/v1/users', fullUser);
  }

  public isEmailTaken(email: string): Observable<boolean>{
    const user = new User();
    user.email = email;
    return this.http.post<boolean>(environment.restUrl + '/api/v1/users/register/check', user);
  }


  validateUser(name: string, password: string): Observable<{result: string}>{
    const authData = btoa(`${name}:${password}`);
    const headers = new HttpHeaders().append('Authorization', 'Basic ' + authData);
    return this.http.get<{result: string}>(environment.restUrl + '/api/v1/basicAuth/validate', {headers: headers});
  }


}

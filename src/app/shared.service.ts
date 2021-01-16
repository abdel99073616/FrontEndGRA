import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

  /************* User *****************/

  getuser(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'api/user/');
  }

  // tslint:disable-next-line:typedef
  adduser(val: any){
    return this.http.get<any[]>(this.APIUrl + 'api/user/', val);
  }

  // tslint:disable-next-line:typedef
  updateuser(val: any){
    return this.http.get<any[]>(this.APIUrl + 'api/user/', val);
  }


  // tslint:disable-next-line:typedef
  deleteuser(val: any){
    return this.http.get<any[]>(this.APIUrl + 'api/user/', val);
  }
  getEmpListuser(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'api/user/');
  }

}

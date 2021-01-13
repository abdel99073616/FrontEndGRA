import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000/"
  constructor(private http:HttpClient) { }

  /************* Department *****************/


  getDepList():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + 'api/Department/');
  }

  addDepart(val:any){
    return this.http.get<any[]>(this.APIUrl + 'api/Department/',val);
  }

  updateDepart(val:any){
    return this.http.get<any[]>(this.APIUrl + 'api/Department/',val);
  }

  deleteDepart(val:any){
    return this.http.get<any[]>(this.APIUrl + 'api/Department/',val);
  }

/************* Employee *****************/

  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/emp/');
  }

  addEmp(val:any){
    return this.http.get<any[]>(this.APIUrl + '/emp/',val);
  }

  updateEmp(val:any){
    return this.http.get<any[]>(this.APIUrl + '/emp/',val);
  }


  deleteEmp(val:any){
    return this.http.get<any[]>(this.APIUrl + '/emp/',val);
  }
  getEmpListNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/emp/');
  }
}

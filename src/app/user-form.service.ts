import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable( )
export class UserFormService {
  private url='http://localhost:3000/user';

  constructor(public http:HttpClient) { }
  employForm(employee):Observable<any[]>{
    return this.http.post<any[]>(this.url,employee)
  }
}

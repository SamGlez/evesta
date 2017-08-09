import {Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import {environment} from '../environments/environment';

export interface Center {
  _id:string,
}

@Injectable()
export class CenterService{
  center:Center;
   BASE_URL:string = `${environment.BASE_URL}/api/centers`;
   options:object;

   constructor(private http: Http) {}

   handleError(e) {
    return Observable.throw(e.json().message);
  }

   getList() {
     return this.http.get(`${this.BASE_URL}`)
       .map((res) => res.json());
   }

   get(id) {
     return this.http.get(`${this.BASE_URL}/${id}`)
       .map((res) => res.json());

   }

   createCenter(center):Observable<Center>{
     return this.http.post(`${this.BASE_URL}`, center, this.options)
     .map(res => res.json())
     .catch(this.handleError);
   }

   edit(center) {
     return this.http.put(`${this.BASE_URL}/${center.id}`, center)
       .map((res) => res.json());
   }

   remove(id) {
     return this.http.delete(`${this.BASE_URL}/${id}`)
       .map((res) => res.json());
   }
}

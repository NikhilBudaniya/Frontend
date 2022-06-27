import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL= 'http://localhost:8000/api/tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  readAll():Observable<any>{
    return this.http.get(baseURL);
  }

  read(id:number):Observable<any>{
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data:any):Observable<any>{
    return this.http.post(baseURL,data);
  }

  update(id:number,data:any):Observable<any>{
    return  this.http.patch(`${baseURL}/${id}`,data);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${baseURL}/${id}`);
  }

  deleteAll():Observable<any>{
    return this.http.delete(baseURL);
  }

  searchByTitle(name:any):Observable<any>{
    return this.http.get(`${baseURL}/search?name=${name}`);
  }


  }


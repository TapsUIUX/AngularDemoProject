import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {

  constructor( private _http:HttpClient ) {
     
  }
  getData(){
    return  this._http.get("https://jsonplaceholder.typicode.com/posts");
  } 

}


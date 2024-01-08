import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  

  constructor(private _http:HttpClient) { }

  //get category
  public categories(){
    return this._http.get(`${baseUrl}/category/`)
  }

  //add category
  public addCategory(category : any ){
    return this._http.post(`${baseUrl}/category/`, category)
  }
}
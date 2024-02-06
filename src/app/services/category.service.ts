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
    console.log("In the categories")
    return this._http.get(`${baseUrl}/testmanagement/api/v1/categories`)
  }

  //add category
  public addCategory(category : any ){
    return this._http.post(`${baseUrl}/testmanagement/api/v1/categories`, category)
  }

  public deleteCategories(categoryId : any){
    return this._http.delete(`${baseUrl}/testmanagement/api/v1/categories/${categoryId}`)
  }

  public getCategoryById(category_id : any){
    return this._http.get(`${baseUrl}/testmanagement/api/v1/categories/${category_id}`)
  }

  public updateCategoryByID(updatedCategory : any,category_id : any){
    console.log(updatedCategory)
    return this._http.put(`${baseUrl}/testmanagement/api/v1/categories/${category_id}`,updatedCategory)
  }
  
}





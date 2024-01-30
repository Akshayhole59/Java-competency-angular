import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class McqserviceService {

  constructor(private _http:HttpClient) { }

  public mcqtest(){
    return this._http.get(`${baseUrl}/testmanagement/api/v1/tests`)
  }

  //add test
public addMcqTest(testData : any){
  console.log(testData)
  return this._http.post(`${baseUrl}/testmanagement/api/v1/tests`,testData);
}

public deleteMcqTest(qid : any){
  return this._http.delete(`${baseUrl}/testmanagement/api/v1/tests${qid}`);
}

//get single test
public getSingleMcqtest(qId:any){
 return this._http.get(`${baseUrl}/testmanagement/api/v1/tests${qId}`)
}

//update test
public updateTest(test:any){
  return this._http.put(`${baseUrl}/testmanagement/api/v1/tests`,test)
}
}

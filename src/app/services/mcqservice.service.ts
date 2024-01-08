import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class McqserviceService {

  constructor(private _http:HttpClient) { }

  public mcqtest(){
    return this._http.get(`${baseUrl}/quiz/`)
  }

  //add test
public addMcqTest(mcqData : any){
  return this._http.post(`${baseUrl}/quiz/`,mcqData);
}

public deleteMcqTest(qid : any){
  return this._http.delete(`${baseUrl}/quiz/${qid}`);
}

//get single test
public getSingleMcqtest(qId:any){
 return this._http.get(`${baseUrl}/quiz/${qId}`)
}

//update test
public updateTest(test:any){
  return this._http.put(`${baseUrl}/quiz/`,test)
}
}

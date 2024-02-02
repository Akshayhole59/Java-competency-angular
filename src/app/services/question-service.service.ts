import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(
    private _http:HttpClient,
  ) { }

//   public getQuestionOfTest(qid:any){
// return this._http.get(`${baseUrl}/question/quiz/all/${qid}`)
//   }

    public getQuestion(){
      console.log("In view question")
      return this._http.get(`${baseUrl}/testmanagement/api/v1/questions`)
    }


  //add question 
    public addQuestion(question : any){
      console.log("In the question service")
      console.log(question)
      return this._http.post(`${baseUrl}/testmanagement/api/v1/questions`,question);
    }


    public getSinglequestion(questionId : any){
      return this._http.get(`${baseUrl}/testmanagement/api/v1/questions/${questionId}`)
    }

    public updatequestion(question : any,questionId : any){
      return this._http.put(`${baseUrl}/testmanagement/api/v1/questions/${questionId}`,question )
    }


  

    public deleteQuetion(questionId : any){
      return this._http.delete(`${baseUrl}/testmanagement/api/v1/questions/${questionId}`)
    }

    public sendExcelFile(formData:any){
      console.log("In the form data ")
      console.log(formData)
    return this._http.post(`${baseUrl}/testmanagement/api/v1/questions/import`,formData)
    }

}

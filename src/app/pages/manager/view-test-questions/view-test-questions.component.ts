import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from '../../../services/question-service.service';
import { error } from 'console';

@Component({
  selector: 'app-view-test-questions',
  templateUrl: './view-test-questions.component.html',
  styleUrl: './view-test-questions.component.css'
})
export class ViewTestQuestionsComponent implements OnInit{
  qId:any;
  qTitle:any;
  questions:any =[]

  constructor(private _route:ActivatedRoute,
    private _questionservice: QuestionServiceService){}
  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title']

    this._questionservice.getQuestionOfTest(this.qId).subscribe((data)=>{
      this.questions=data;
      console.log(data);
    },
    (error)=>{
      console.log(error);
    })
  }
  

}

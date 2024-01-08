import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from '../../../services/question-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css'
})
export class AddQuestionComponent implements OnInit {
  qId:any;
  qTitle:any;
  
  question={
    exam:{
    qid :'',
    title :'',
    },
    content:'',
    image:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  }
  constructor(private _route:ActivatedRoute, private _questionService : QuestionServiceService){}
  ngOnInit(): void {
    this.qId= this._route.snapshot.params['qid'];
    this.qTitle=this._route.snapshot.params['title'];
   // console.log(this.qId)
   this.question.exam['qid']=this.qId;
  }


  formSubmit(){
    //alert("Testing");
    console.log(this.question)
    // if(this.question.content.trim() == '' || this.question.content == null){
    //   return
    // }


    //add question
    this._questionService.addQuestion(this.question).subscribe((data)=>{
      Swal.fire('Success','Success !! Data added successfully','success');
    },
    (error)=>{
      Swal.fire('Error','Error in add MCQ-test in  database','error');
    })


  }

}

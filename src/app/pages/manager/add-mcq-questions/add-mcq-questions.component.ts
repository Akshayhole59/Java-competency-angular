import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from '../../../services/question-service.service';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-add-mcq-questions',
  templateUrl: './add-mcq-questions.component.html',
  styleUrl: './add-mcq-questions.component.css'
})
export class AddMcqQuestionsComponent implements OnInit{
  qId:any;
  qTitle:any;
  
  question : any ={
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    marks:'',
    category :{
      category_id:'',
    },
  };

  categories : any ;
  constructor(private _route:ActivatedRoute, private _questionService : QuestionServiceService,
    private _categores : CategoryService){}
  ngOnInit(): void {
    //this.qId= this._route.snapshot.params['qid'];
    //this.qTitle=this._route.snapshot.params['title'];
   // console.log(this.qId)
  // this.question.exam['qid']=this.qId;


   this._categores.categories().subscribe((categoryData)=>{
    console.log("In the categories field")
    this.categories=categoryData;
    console.log(this.categories)
   },
   (error)=>{
   alert("error in loading categories")
   console.log(error)
   });
  }


  formSubmit(){
    //alert("Testing");
    console.log(this.question)
    
    //add question
    this._questionService.addQuestion(this.question).subscribe((data)=>{
      Swal.fire('Success','Success !! Data added successfully','success');
    },
    (error)=>{
      Swal.fire('Error','Error in add MCQ-test in  database','error');
    })


  }

}

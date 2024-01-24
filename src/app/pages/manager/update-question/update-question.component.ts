import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from '../../../services/question-service.service';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  questionid : any ;
  categories : any ;
  question : any;
  constructor(private _route:ActivatedRoute, private _questionService : QuestionServiceService,
    private _categores : CategoryService,private _router:Router){}
  ngOnInit(): void {

    this.questionid = this._route.snapshot.params['qid'];
    
    this._categores.categories().subscribe((categoryData)=>{
      console.log(categoryData)
    this.categories=categoryData;
    console.log(this.categories)
     },
   (error)=>{
    console.log("error1")
   alert("error in loading categories")
   console.log(error)
      });


   this._questionService.getSinglequestion(this.questionid).subscribe(
    (data)=>{
      console.log(data)
        this.question=data; 
    },
    (error)=>{
    console.log(error);
    })
  }



  public updateForm(){
    this._questionService.updatequestion(this.question,this.questionid).subscribe((data)=>{
      Swal.fire("Success","Updated Successfully","success").then((e)=>{
        this._router.navigate(['/manager-dashboard/view-questions'])
      })
     },
     (error)=>{
      Swal.fire("Error","Error while updating the data","error")
     })
  }

}

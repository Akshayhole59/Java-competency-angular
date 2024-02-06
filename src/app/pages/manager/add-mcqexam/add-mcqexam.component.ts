import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { McqserviceService } from '../../../services/mcqservice.service';
import { QuestionServiceService } from '../../../services/question-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-mcqexam',
  templateUrl: './add-mcqexam.component.html',
  styleUrl: './add-mcqexam.component.css'
})
export class AddMcqexamComponent implements OnInit{
  questionsList: any[] = [];
  selectedQuestionsList: any[] = [];
  test :any= {
    title:'',
    description:'',
    maxMarks:'',
    numberofQuestions:'',
    questions: [],
  }

  constructor( private _snak:MatSnackBar, private _mcqService : McqserviceService, private _questionservice : QuestionServiceService, private _router:Router){}

  ngOnInit(): void {
   

    this._questionservice.getQuestion().subscribe(
      (data: any)=>{
        this.questionsList=data;
      },
      (error)=>{
        Swal.fire('Error','Error in get Question for this service');
      }
    )


  }

  public onCheckboxChange(question: any): void {
    if (this.selectedQuestionsList.includes(question)) {
      // Remove from the list if already selected
      this.selectedQuestionsList = this.selectedQuestionsList.filter(q => q !== question);
    } else {
      // Add to the list if not selected
      this.selectedQuestionsList.push(question);
    }
  }
   
   

  //This is for to add test in data base 
  public addMcqTest(){
    
      if(this.test.title.trim()=='' || this.test.title == null){
    this._snak.open("Title required",'',{
     duration : 3000,
      })
     }
     
     console.log("To check the selected questions ");
     
     //this is for to map the questions list in request
     this.test.questions = this.selectedQuestionsList.map(q => {
      return {
        questionId: q.questionId,
        content: q.content,
        option1: q.option1,
        option2: q.option2,
        option3: q.option3,
        option4: q.option4,
        marks: q.marks,
        answer: q.answer,
      };
    });
    
    console.log(this.test.questions);
    console.log(this.test)
    //call addTest service
     this._mcqService.addMcqTest(this.test).subscribe((data)=>
     {
      Swal.fire('Success','Test is added','success').then((e)=>{
        this._router.navigate(['/manager-dashboard/test']);
      })
     },
     (error)=>{
      Swal.fire('Error','Error in add MCQ-test in  database','error');
     })

  }

}

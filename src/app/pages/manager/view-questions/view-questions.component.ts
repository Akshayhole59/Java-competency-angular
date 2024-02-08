import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionServiceService } from '../../../services/question-service.service';
import { error } from 'console';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrl: './view-questions.component.css'
})
export class ViewQuestionsComponent implements OnInit{
  qId:any;
  qTitle:any;
  questions:any =[]

  category : any = [];
  categories: string[] = [];
  selectedCategory : any = 'All';

  constructor(private _route:ActivatedRoute,
    private _questionservice: QuestionServiceService, private _router:Router, private _category : CategoryService){}
  ngOnInit(): void {
   
     
    this._questionservice.getQuestion().subscribe((data)=>{
      console.log(data)
      this.questions=data
     
    },
    (error)=>{
      console.log(error)
    })

  }

 
  public deleteQuestion(qId:any){
    Swal.fire({
     icon:'info',
     title:'Are you sure you want to delete',
     confirmButtonText:'YES',
     showCancelButton:true
    }).then((result)=>{
     if(result.isConfirmed){
        // alert(qid);
     this._questionservice.deleteQuetion(qId).subscribe(
       (data:any)=>{
         this.questions=this.questions.filter((questionsnew : any)=>questionsnew.qid != qId)
         Swal.fire('Success','Deleted !!' , 'success').then((result)=>{
          if (result.isConfirmed) {
            window.location.reload();
          }
        })
       },
       (error)=>{
        console.log(error);
        Swal.fire('Error', 'Error in Deleting Test', 'error');
       })
     }
    })


    this._category.categories().subscribe((data:any)=>{
      this.category=data;
      console.log(this.categories);
      this.categories = ['All', ...data.map((category: any) => category.title)];
     },
     (error)=>{
      console.log(error);
      Swal.fire('Error ','Error in server Data ','error')
     }
     )

  }
  
  // This is for to change the category
  onCategoryChange(category: string): void {
    this.selectedCategory = category;
  }

}



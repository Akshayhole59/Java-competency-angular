import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { McqserviceService } from '../../../services/mcqservice.service';


@Component({
  selector: 'app-add-mcqexam',
  templateUrl: './add-mcqexam.component.html',
  styleUrl: './add-mcqexam.component.css'
})
export class AddMcqexamComponent implements OnInit{
  categories : any =[]

  mcqExamData :any= {
    title:'',
    description:'',
    maxMarks:'',
    numberofQuestions:'',
    active:true,
    category:{
      cid:'',
    },
  }

  constructor(private _categoriesservice:CategoryService, private _snak:MatSnackBar, private _mcqService : McqserviceService){}

  ngOnInit(): void {
    this._categoriesservice.categories().subscribe(
      (data : any)=>{
        this.categories=data;
        console.log(data);
      },
      (error )=>{
        console.log(error)
        Swal.fire('Error','Error in get categories data','error')
      });
  }

  public addMcqTest1(){
    // console.log(this.mcqData);
    if(this.mcqExamData.title.trim()=='' || this.mcqExamData.title == null){
    this._snak.open("Title required",'',{
     duration : 3000,
    })
    }

    //call addTest service
     this._mcqService.addMcqTest(this.mcqExamData).subscribe((data)=>
     {
      Swal.fire('Success','Test is added','success');
       //remove data 
      this.mcqExamData={
        title:'',
        description:'',
        maxMarks:'',
        numberofQuestions:'',
        active:true,
        category:{
          cid:'',
        },
      }


     },
     (error)=>{
      Swal.fire('Error','Error in add MCQ-test in  database','error');
     })

  }

}

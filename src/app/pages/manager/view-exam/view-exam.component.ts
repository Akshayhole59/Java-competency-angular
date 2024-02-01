import { Component, OnInit } from '@angular/core';
import { McqserviceService } from '../../../services/mcqservice.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrl: './view-exam.component.css'
})
export class ViewExamComponent implements OnInit{

   mcqTest : any= []
  constructor(private _mcqservice:McqserviceService,private _router:Router){}

  ngOnInit(): void {

    this._mcqservice.mcqtest().subscribe(
      (data:any)=>{
        this.mcqTest=data;
        console.log(this.mcqTest);
      },
      (error)=>{
       console.log(error);
       Swal.fire('Error', 'Error in loading data', 'error');
      })
  }

  public deleteMcqTest(testId:any){
   Swal.fire({
    icon:'info',
    title:'Are you sure you want to delete',
    confirmButtonText:'YES',
    showCancelButton:true
   }).then((result)=>{
    if(result.isConfirmed){
       // alert(qid);
    this._mcqservice.deleteMcqTest(testId).subscribe(
      (data:any)=>{
       
        this.mcqTest=this.mcqTest.filter((mcqTestnew : any)=>mcqTestnew.testId != testId)
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
  }

}

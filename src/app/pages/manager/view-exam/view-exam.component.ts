import { Component, OnInit } from '@angular/core';
import { McqserviceService } from '../../../services/mcqservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrl: './view-exam.component.css'
})
export class ViewExamComponent implements OnInit{

   mcqTest : any= []
  constructor(private _mcqservice:McqserviceService){}

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

  public deleteMcqTest(qid:any){
   Swal.fire({
    icon:'info',
    title:'Are you sure you want to delete',
    confirmButtonText:'YES',
    showCancelButton:true
   }).then((result)=>{
    if(result.isConfirmed){
       // alert(qid);
    this._mcqservice.deleteMcqTest(qid).subscribe(
      (data:any)=>{
        this.mcqTest=this.mcqTest.filter((mcqTestnew : any)=>mcqTestnew.qid != qid)
        Swal.fire('Success','Deleted !!' , 'success')
      },
      (error)=>{
       console.log(error);
       Swal.fire('Error', 'Error in Deleting Test', 'error');
      })
    }
   })
  }

}
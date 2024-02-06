import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { McqserviceService } from '../../../services/mcqservice.service';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-mcqexam',
  templateUrl: './update-mcqexam.component.html',
  styleUrl: './update-mcqexam.component.css'
})
export class UpdateMcqexamComponent implements OnInit{
  testId=0;
  test :any;
  categories : any ;

  constructor(private _route: ActivatedRoute, 
    private _test : McqserviceService, 
    private _categores : CategoryService,
    private _router:Router ){}


  ngOnInit(): void {
    this.testId = this._route.snapshot.params['testId'];
    console.log(this.testId);
    this._test.getSingleMcqtest(this.testId).subscribe(
      (data)=>{
          this.test=data;
          console.log(this.test)
      },
      (error)=>{
      console.log(error);
      })


      this._categores.categories().subscribe((categoryData)=>{
       this.categories=categoryData;
      },
      (error)=>{
      alert("error in loading categories")
      });
  }


  public updateData(){
     //alert("Update data")

     this._test.updateTest(this.test,this.testId).subscribe((data)=>{
      Swal.fire("Success","Updated Successfully","success").then((e)=>{
        this._router.navigate(['/manager-dashboard/view-question'])
      })
     },
     (error)=>{
      Swal.fire("Error","Error while updating the data","error")
     })
  }





}

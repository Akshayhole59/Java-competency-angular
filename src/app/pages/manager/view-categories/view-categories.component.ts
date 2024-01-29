import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';
import { Console } from 'console';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories: any[] = [];

  constructor(private _category:CategoryService){}
  ngOnInit(): void {
   this._category.categories().subscribe((data:any)=>{
    this.categories=data;
    console.log(this.categories);
   },
   (error)=>{
    console.log(error);
    Swal.fire('Error ','Error in server Data ','error')
   }
   )
  }




  public deleteCategory(category_id :any){
    console.log("In delete categories")
    Swal.fire({
      icon:'info',
      title:'Are you sure you want to delete',
      confirmButtonText:'YES',
      showCancelButton:true
     }).then((result)=>{
      if(result.isConfirmed){
         // alert(qid);
      this._category.deleteCategories(category_id).subscribe(
        (data:any)=>{
          this.categories=this.categories.filter((categoriesnew : any)=>categoriesnew.category_id != category_id)
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

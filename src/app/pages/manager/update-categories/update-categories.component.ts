import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrl: './update-categories.component.css'
})
export class UpdateCategoriesComponent implements OnInit{
 
  category_id : any;
  categories : any ;

  constructor(private _route:ActivatedRoute,private _category : CategoryService){}
  

  ngOnInit(): void {
    this.category_id = this._route.snapshot.params['category_id'];


    this._category.getCategoryById(this.category_id).subscribe((categoryData)=>{
    this.categories=categoryData;
     },
   (error)=>{ 
   alert("error in loading categories")
      });

    }


    updateCategory(){
            

      this._category.updateCategoryByID(this.categories).subscribe((data:any)=>{
        this.categories.title='',
        this.categories.description='',
      Swal.fire('Success !!','Category is added successfully','success')
      },
      (error)=>{
        console.log(error)
       Swal.fire('Error',"Server error",'error')
      }
      )



    }



 

}

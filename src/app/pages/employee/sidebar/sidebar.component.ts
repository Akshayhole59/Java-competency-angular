import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-employee',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  categories : any;
  constructor(private _categories:CategoryService){}
  ngOnInit(): void {
    this._categories.categories().subscribe((data:any)=>{
       this.categories=data;
    },
    (error)=>{
      Swal.fire('Error','Error in categories in  database','error');
    })
  }

}

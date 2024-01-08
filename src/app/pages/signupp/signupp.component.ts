import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signupp',
  templateUrl: './signupp.component.html',
  styleUrl: './signupp.component.css'
})
export class SignuppComponent implements OnInit{

  constructor(private userService:UserService , private snack:MatSnackBar){}

  public user={
    employeeId : '',
    firstName : '',
    lastName : '',
    email : '',
    mobileNo : '',
    experience : '',
    password :'',
    confirmPassword : '',
    roles : '',
  }

  ngOnInit(): void {}

  formSubmit(){
   
    

    console.log(this.user);
     
    //Validation for password
     if(this.user.password !== this.user.confirmPassword){
       //alert("Password does not match with confirm password");
       this.snack.open("Password does not match with confirm password",'ok',{
        duration:3000
      })
       return ;
     }
    

    //Validation for employee id 
      if (/^\d{6}$/.test(this.user.employeeId)) {
        console.log("");
      } else {
       //alert("");
       this.snack.open("Employee ID is not correct",'ok',{
        duration:3000
      })
      return ;
      }

      if (validateEmail(this.user.email)) {
        console.log("Email is valid.");
    } else {
        //alert("Email is not valid.");
        this.snack.open("Email is not valid.",'ok',{
          duration:3000
        })
        return ;
    }
    
    if (/^\d{10}$/.test(this.user.mobileNo)) {
      console.log("");
    } else {
     //alert("Mobile No is not correct");
     this.snack.open("Mobile No is not correct",'ok',{
      duration:3000
    })
    return ;
    }

    if(this.user.roles === '' || this.user.roles === null){
      this.snack.open("Your Role is not valid",'ok',{
        duration:3000
      })
      return;
    }


    console.log(this.user)
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        // this.snack.open("Sucess !!!",'ok',{
        //   duration:4000
        // })
        Swal.fire('Success','User is registered','success')
      },
      (error) => {
         console.log(error);
         this.snack.open(error,'ok',{
          duration:8000
        })
         
      }
    )
   
  }

}


function validateEmail(emailAddress: any) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Check if the email matches the regular expression
  return emailRegex.test(emailAddress);

}


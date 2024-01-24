import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
   
  constructor(private snak:MatSnackBar , private router:Router){}
  //private  login:LoginService,
  ngOnInit(): void {}

  loginData={
    username:'',
    password:''
  };
   
  formSubmit(){}
}

  //   if( this.loginData.username.trim() =='' || this.loginData.username == null){
  //     this.snak.open('User Name Required !!','',{
  //       duration : 4000,
  //     })
  //     return
  //   }

  //   if( this.loginData.password =='' || this.loginData.password == null){
  //     this.snak.open('Password Required !!','',{
  //       duration : 4000,
  //     })
  //     return
  //   }
    
  //   //generateToken
  //   this.login.generateToken(this.loginData).subscribe(
  //     (data:any )=>{
  //       console.log("Success")
        
  //       //Login
  //       this.login.loginUser(data.token);
  //       this.login.getCurrentUser().subscribe(
  //           (user:any)=>{
  //             this.login.setUser(user); 
  //             console.log(user);

  //             if(this.login.getUserRole() == "Employee"){
  //             // window.location.href= '/employee-dashboard';
  //             this.router.navigate(['employee-dashboard']);
  //             this.login.loginStatusSubject.next(true);
  //             }else if(this.login.getUserRole() == 'Manager'){
  //               //window.location.href= '/manager-Dashboard';
  //               this.router.navigate(['manager-dashboard']);
  //               this.login.loginStatusSubject.next(true);
  //             }else{
  //               //logout
  //               this.login.logout();

  //             }
  //           }
  //       );


  //   },
  //   (error)=>{
  //      console.log("Error")
  //      console.log(error)
  //      this.snak.open("Invalid details !! try again",'',{
  //       duration:3000,
  //      })
  //   }
  //   );



  // }

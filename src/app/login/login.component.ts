import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from '../Helper/constants';
import { User } from '../Models/user';
import { UserService } from '../service/user.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm=this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required],

  })
  constructor(private formBuilder:FormBuilder,
    private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){ 
    debugger
    let email=this.loginForm.controls["email"].value;
    let password=this.loginForm.controls["password"].value;
    this.userService.login(email,password).subscribe((data:any)=>
    {
          if(data.responseCode==1)
          {
            localStorage.setItem(Constants.USER_KEY,JSON.stringify(data.dataSet));
            this.router.navigate(["/user-management"]);
          }
          console.log("response",data)
    },error=>{
      console.log("error",error)
    })
  }

}

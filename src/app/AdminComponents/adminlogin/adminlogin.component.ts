import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  message:string="Field Required";
  logInForm:any;
  constructor(private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
  this.logInForm=this.formBuilder.group({
    email: ['',[Validators.required]],
    password: ['',[Validators.required]]
  })
  }
 
  logIn():void{
    this.router.navigate(['/admin']);
  }
}

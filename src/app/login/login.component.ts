import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data="your perfect banking partener"
input="password"

acano=""
pswrd=""
userDetails:any={
  1000:{acno:1000,username:"anu",password:"abc123",balance:0},
  1001:{acno:1001,username:"amal",password:"abc123",balance:0},
  1003:{acno:1003,username:"arun",password:"abc123",balance:0},
  1004:{acno:1004,username:"akhil",password:"abc123",balance:0}
}

 constructor( ) { }

 ngOnInit(): void{

 }

login(){
  alert("login clicked")
}

acno(event:any){
  this.acano=event.target.value
  console.log(this.acano);
  
} 
pswdchange(event:any){
  this.pswrd=event.target.value
  console.log(this.pswrd);
  
}
}
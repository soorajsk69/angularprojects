import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
data="your perfect banking partener"
input="password"


 constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }
//  model forms
loginform=this.fb.group({
  acano:['',[Validators.required,Validators.pattern('[0-9]+')]],
  pswrd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})

 ngOnInit(): void{

 }

login(){
  var acnum=this.loginform.value.acano
  var psw=this.loginform.value.pswrd
if(this.loginform.valid){
const result= this.ds.login(acnum,psw)
if(result){
  alert("login sucess")
  this.router.navigateByUrl('dashboard')
}
else{
  alert('incurrect acno or password')
}
// login(a:any,b:any){
//   var acnum=a.value
//   var psw=b.value
//   var userDetails=this.userDetails
//   if(acnum in userDetails){
//   if(psw == userDetails[acnum]["password"]){
//      alert("login sucess")
//   }
//   else{
//     alert("incorrect password")
//   }
// }
// else{
//   alert("acno incurrect or not registered yet")
// }
// //   // alert("login clicked")
// }


// acnochange(event:any){
//   this.acano=event.target.value
//   // console.log(this.acano);
  
// } 
// pswdchange(event:any){
//   this.pswrd=event.target.value
//   // console.log(this.pswrd);
  
// }
}
else{
  alert('invalid form')
}
}
}
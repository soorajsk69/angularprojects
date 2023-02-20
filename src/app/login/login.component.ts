import { Component } from '@angular/core';
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

acano=''
pswrd=''

 constructor(private router:Router,private ds:DataService) { }

 ngOnInit(): void{

 }

login(){
  var acnum=this.acano
  var psw=this.pswrd

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
}
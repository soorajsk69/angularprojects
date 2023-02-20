import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
user2=""
acno2=""
pasw2=""

constructor(private ds:DataService,private router:Router){}
ngOnInit(): void{
}
register(){
  var user2=this.user2
  var acno2=this.acno2
  var pasw2=this.pasw2
 
  const result=this.ds.register(user2,acno2,pasw2)
  if(result){
    alert("registered")
   this.router.navigateByUrl('')
  }
  else{
    alert("acno is already present")
  }

  // console.log(user2,acno2,pasw2);
  
}

  
}

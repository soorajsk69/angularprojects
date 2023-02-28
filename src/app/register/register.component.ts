import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

// create reactive form of register form
registerForm=this.fb.group({
  user2:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  acno2:['',[Validators.required,Validators.pattern('[0-9]+')]],
  pasw2:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})

constructor(private ds:DataService,private router:Router,private fb:FormBuilder){}

ngOnInit(): void{
}
register(){
  var user2=this.registerForm.value.user2
  var acno2=this.registerForm.value.acno2
  var pasw2=this.registerForm.value.pasw2
 if(this.registerForm.valid){
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
else{
  alert('not valid')
}
}
  
}

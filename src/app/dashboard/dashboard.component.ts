import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user:any

  acno:any
  pasw:any
  amnt:any

  acno1:any
  pasw1:any
  amnt1:any

 constructor (private ds:DataService){
 this.user= this.ds.currentuser
 }
 ngOnInit(): void{

 }
 deposit(){
  var acno=this.acno
  var pasw=this.pasw
  var amnt=this.amnt
 
  const result =this.ds.deposit(acno,pasw,amnt)
  if(result){
    alert(`your ac has been credited with amount ${amnt} and the current balance is${result}`)
  }
  else{
    alert('incurrect acno or password')
  }
 }
 withdraw(){
  var acno=this.acno1
  var pasw=this.pasw1
  var amnt=this.amnt1
   
  const result=this.ds.withdraw(acno,pasw,amnt)
  if(result){
    alert(`your ac has been debited with amount ${amnt} and the current balance is${result}` )
  }
 }
}

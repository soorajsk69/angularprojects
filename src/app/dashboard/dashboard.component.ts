import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

 acnod:any
  user: any
  datedetails:any
  // acno:any
  // pasw:any
  // amnt:any

  // acno1:any
  // pasw1:any
  // amnt1:any
  constructor(private ds: DataService, private fb: FormBuilder,private router:Router) {
    this.user = this.ds.currentUser
  //  access data
  this.datedetails=new Date()

  }
  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pasw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })
  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pasw1: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })
  ngOnInit(): void {
    if(!localStorage.getItem("currentAc")){
      alert("please login")
      this.router.navigateByUrl("")
    }

  }
  deposit() {
    var acno = this.depositForm.value.acno
    var pasw = this.depositForm.value.pasw
    var amnt = this.depositForm.value.amnt
    if (this.depositForm.valid) {
      const result = this.ds.deposit(acno, pasw, amnt)
      if (result) {
        alert(`your ac has been credited with amount ${amnt} and the current balance is${result}`)
      }
      else {
        alert('incurrect acno or password')
      }
    }
    else {
      alert('invalid form')
    }
  }

  withdraw() {
    var acno = this.withdrawForm.value.acno1
    var pasw = this.withdrawForm.value.pasw1
    var amnt = this.withdrawForm.value.amnt1
    if (this.withdrawForm.valid) {


      const result = this.ds.withdraw(acno, pasw, amnt)
      if (result) {
        alert(`your ac has been debited with amount ${amnt} and the current balance is${result}`)
      }
    }
    else {
      alert('invalid form')
    }
  }

  logout(){
  localStorage.removeItem("currentAc")
  localStorage.removeItem("currentUser")
  this.router.navigateByUrl("")
  }

  deleteparent(){
    this.acnod=JSON.parse(localStorage.getItem("currentAc")|| "")
  }
  cancel(){
    this.acnod=''
  }
}


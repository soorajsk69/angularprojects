import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser: any
  currentAc: any
  userDetails:any
  constructor() {
    this.getdata()
   }
  // userDetails: any = {
  //   1000: { acno: 1000, username: "anu", password: "abc123", balance: 0, transaction: [] },
  //   1001: { acno: 1001, username: "amal", password: "abc123", balance: 0, transaction: [] },
  //   1003: { acno: 1003, username: "arun", password: "abc123", balance: 0, transaction: [] },
  //   1004: { acno: 1004, username: "akhil", password: "abc123", balance: 0, transaction: [] }
  // }

  saveData() {
    if (this.userDetails) {
      localStorage.setItem("database", JSON.stringify(this.userDetails))
    }
    if (this.currentUser) {
      localStorage.setItem("currentUser",(this.currentUser))
    }
    if (this.currentAc) {
      localStorage.setItem("currentAc", JSON.stringify(this.currentAc))
    }
    
  }
  getdata(){
    if(localStorage.getItem("database")){
      this.userDetails=JSON.parse( localStorage.getItem('database')||"")
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=localStorage.getItem("currentUser")
    }
    if(localStorage.getItem("currentAc")){
      this.currentAc=JSON.parse(localStorage.getItem("currentAc")||"")

    }
  }


  register(user2: any, acno2: any, pasw2: any) {
    if (acno2 in this.userDetails) {
      return false
    }

    else {
      this.userDetails[acno2] = { acno: acno2, username: user2, password: pasw2, balance: 0,transaction: [] }
      console.log(this.userDetails);
     this.saveData()
      return true
    }
  }
  login(acno2: any, pasw2: any) {
    var userDetails = this.userDetails

    if (acno2 in userDetails) {
      if (pasw2 == userDetails[acno2]["password"]) {
        this.currentUser = this.userDetails[acno2]['username']
        // console.log(this.currentUser);
        this.currentAc = acno2
        this.saveData()
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
    //   // alert("login clicked")
  }

  deposit(acno: any, password: any, amount: any) {


    let userDetails = this.userDetails
    // converet string amount to number
    var amnt = parseInt(amount)
    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        // update balance
        userDetails[acno]['balance'] += amnt

        // transaction data store
        userDetails[acno]["transaction"].push({ type: 'CREDIT', amount: amnt })

        this.saveData()
        // return current balance
        return userDetails[acno]['balance']

      }
      else {
        return false
      }
    }
    else {
      return false
    }

  }
  withdraw(acno: any, password: any, amount: any) {


    let userDetails = this.userDetails
    // converet string amount to number
    var amnt = parseInt(amount)
    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        if (amount <= userDetails[acno]["balance"]) {



          // update balance
          userDetails[acno]['balance'] -=amnt
          // return current balance

          // transaction data store
          userDetails[acno]["transaction"].push({ type: 'DEBIT', amount: amnt })
          console.log(userDetails);
         this.saveData()
         
          return userDetails[acno]['balance']

        }
        else {
          alert('insufficient balance')
          return false
        }

      }
      else {
        alert('incurrect password')
        return false
      }
    }
    else {
      alert('incurrect acno')
      return false
    }

  }
  gettransaction(acno: any) {
    return this.userDetails[acno]['transaction']
  }
}




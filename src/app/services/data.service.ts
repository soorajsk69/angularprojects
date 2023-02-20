import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser = ''
  constructor() { }
  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: "abc123", balance: 0,transaction: []},
    1001: { acno: 1001, username: "amal", password: "abc123", balance: 0,transaction: [] },
    1003: { acno: 1003, username: "arun", password: "abc123", balance: 0 ,transaction: []},
    1004: { acno: 1004, username: "akhil", password: "abc123", balance: 0,transaction: [] }
  }

  register(user2: any, acno2: any, pasw2: any) {
    if (acno2 in this.userDetails) {
      return false
    }

    else {
      this.userDetails[acno2] = { acno: acno2, username: user2, password: pasw2, balance: 0 }
      console.log(this.userDetails);

      return true
    }
  }
  login(acno2: any, pasw2: any) {
    var userDetails = this.userDetails

    if (acno2 in userDetails) {
      if (pasw2 == userDetails[acno2]["password"]) {
        this.currentuser = this.userDetails[acno2]['username']
        console.log(this.currentuser);

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
        userDetails[acno]['balance']+=amnt
      
        // return current balance
        return userDetails[acno]['balance']
      }
      else{
        return false
      }
    }
    else{
      return false
    }

  }
  withdraw(acno:any, password: any, amount: any) {


    let userDetails = this.userDetails
    // converet string amount to number
    var amnt = parseInt(amount)
    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        if(amount<=userDetails){
       
                  // update balance
        userDetails[acno]['balance']-=amnt
                // return current balance
                return userDetails[acno]['balance']

        }
        else{
          alert('insufficient balance')
          return false
        }
  
      }
      else{
        alert('incurrect passaword')
        return false
      }
    }
    else{
      alert('incurrect acno')
      return false
    }
  
  }
  
}






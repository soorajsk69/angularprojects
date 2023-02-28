import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent{
  transactionData: any
  constructor(private ds: DataService) {

    this.transactionData = this.ds.gettransaction(this.ds.currentAc)
    // console.log(this.transactionData);

  }

  ngOninit(): void {

  }
}

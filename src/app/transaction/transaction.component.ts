import { TransactionsService } from './../transactions.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(
    private router: Router,
    private allTransaction: TransactionsService,
    ) { }

  transactions:any=[]
  t_id:any;
  
  ngOnInit(): void {
    this.transactions= this.allTransaction.getFlight();
    console.log(this.transactions);

  }
  public dates = new Set<String>();
  dateExists(date:any){
    if(this.dates.has(date)){
      return true;
    }
    else{
      this.dates.add(date);
      return false;
    }
  }


}

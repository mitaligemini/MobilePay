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
    // this.transactions.sort((a:any,b:any)=>{
    //   var dateA = new Date(a.date).getTime();
    //   var dateB = new Date(b.date).getTime();
    //   return dateA > dateB ? 1 : -1; 
    // });
    this.transactions.sort((a:any, b:any) => {
      const dt1 = Date.parse(`${a.date} ${a.time}`)
      const dt2 = Date.parse(`${b.date} ${b.time}`)
    
      return dt1 - dt2
    
    })
   

    
    
    console.log(this.transactions)

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

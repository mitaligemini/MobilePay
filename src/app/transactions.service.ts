import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }
  getFlight() {
    return [
      {
        type: 'You paid',
        amount: 3000,
        id:'A1344242445252',
        date: '07 Oct 2020',
        time:'10:24',
        format:'PM',
        pay:false,
        decline:false,
        cancel:false,
      },
      {
        type: 'You requested',
        amount: 250,
        id:null,
        date: '18 Nov 2020',
        time:'10:24',
        format:'AM',
        pay:false,
        decline:false,
        cancel:true,
      },
      {
        type: 'You received',
        amount: 250,
        id:'D34526662662',
        date: '19 Nov 2020',
        time:'10:24',
        format:'AM',
        pay:false,
        decline:false,
        cancel:false,
      },
      {
        type: 'Request received',
        amount: 250,
        id:null,
        date: '19 Nov 2020',
        time:'10:24',
        format:'AM',
        pay:true,
        decline:true,
        cancel:false,
      },
      {
        type: 'Request received',
        amount: 250,
        id:null,
        date: '16 Nov 2020',
        time:'10:24',
        format:'AM',
        pay:true,
        decline:true,
        cancel:false,
      },
      {
        type: 'You paid',
        amount: 3000,
        id:'A1344242445252',
        date: '16 Nov 2020',
        time:'10:24',
        format:'PM',
        pay:false,
        decline:false,
        cancel:false,
      },
    
    ]}
}

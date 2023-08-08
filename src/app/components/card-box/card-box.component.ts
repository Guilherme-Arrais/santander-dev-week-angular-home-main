import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit{
  constructor(private service: CardsService){

  }
accountData: AccountDataModel ={
  name: "Muniz",
  account:{
      agency : "5578",
      number: "554.555548-0"
  },
  card:{
      limit: 0,
      number: "256.487,02"
  }
}
ngOnInit(): void {
 this.getAccountData();
}
getAccountData(){
  this.service.getCard().subscribe(data=>{
    this.accountData.name= data.name
  })
}

}


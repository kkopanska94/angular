import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adress-cards',
  templateUrl: './adress-card.component.html',
  styleUrls: ['./adress-card.component.css']
})
export class AdressCardComponent implements OnInit {
  
  user : any;
  constructor() {
    this.user = {
      name:'Stephan Müller',
      beruf:'Lehrer',
      adresse:'Bakery Street 13',
      telefonnummer:[
        '509-831-936',
        '0211-12-32'
      ]
      }
   }

  ngOnInit(): void {
  }

}

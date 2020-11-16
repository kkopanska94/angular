import { Component, OnInit } from '@angular/core';
import {Liste} from '../liste';
import {LISTE} from '../liste-seiten';
@Component({
  selector: 'header-liste',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  liste = LISTE;
  constructor() { }

  ngOnInit(): void {
  }

}

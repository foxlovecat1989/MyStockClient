import { Component, Input, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/Stock';

@Component({
  selector: 'admin-stock-detail',
  templateUrl: './admin-stock-detail.component.html',
  styleUrls: ['./admin-stock-detail.component.css']
})
export class AdminStockDetailComponent implements OnInit {

  @Input()
  stock!: Stock;

  constructor() { }

  ngOnInit(): void {
  }

  editStock(){

  }

  deleteStock(){

  }

}

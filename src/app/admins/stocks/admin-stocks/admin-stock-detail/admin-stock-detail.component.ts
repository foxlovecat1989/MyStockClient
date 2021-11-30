import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/model/Stock';
import { StockService } from 'src/app/services/stock.service';


@Component({
  selector: 'admin-stock-detail',
  templateUrl: './admin-stock-detail.component.html',
  styleUrls: ['./admin-stock-detail.component.css']
})
export class AdminStockDetailComponent implements OnInit {

  @Input('stock')
  stock!: Stock;

  @Output('dataReloadEvent')
  dataReloadEvent = new EventEmitter();
  @Input('message')
  message = '';

  constructor(
    private stockService: StockService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  edit(){
    this.router.navigate(['admins', 'stocks'], {queryParams: {action: 'edit', id: this.stock.id}});
  }

  delete(){
    this.message = 'Deleting data, please wait...';
    this.stockService.deleteStock(this.stock.id).subscribe(
      data => {
        this.dataReloadEvent.emit();
        this.router.navigate(['admins', 'stocks']);
      },
      error => {
        this.message = 'Something went wrong, please try again...';
      }
    );
  }

}

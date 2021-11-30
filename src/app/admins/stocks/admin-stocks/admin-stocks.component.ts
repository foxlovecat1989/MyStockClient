import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/model/Stock';
import { StockService } from 'src/app/services/stock.service';
@Component({
  selector: 'admin-stocks',
  templateUrl: './admin-stocks.component.html',
  styleUrls: ['./admin-stocks.component.css'],
})
export class AdminStocksComponent implements OnInit {
  action!: string;
  stocks!: Array<Stock>;
  selectedStock!: Stock;
  isLoadingData = true;
  message = 'Loading data, please wait...';

  constructor(
    private stockService: StockService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadingData();
  }

  private subscribeQueryParams() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        const id = params['id'];
        this.action = params['action'];
        this.setSelectedStock(id);
      }
    );
  }

  private setSelectedStock(id: number) {
    if (id)   // under edit mode
      this.selectedStock = this.stocks.find(stock => stock.id === +id)!;
    else{     // under add mode
      this.selectedStock = new Stock();
    }
  }

  public loadingData() {
    this.stockService.getStocks().subscribe(
      stocks => {
        this.stocks = stocks;
        this.isLoadingData = false;
        this.message = '';
        this.subscribeQueryParams();
      }
    );
  }

  view(id: number) {
    this.router.navigate(['admins', 'stocks'], {queryParams: {action: 'view', id: id}});
  }

  add() {
    this.router.navigate(['admins', 'stocks'], {queryParams: {action: 'add'}});
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Stock } from 'src/app/model/Stock';
@Component({
  selector: 'admin-stocks',
  templateUrl: './admin-stocks.component.html',
  styleUrls: ['./admin-stocks.component.css'],
})
export class AdminStocksComponent implements OnInit {
  action!: string;
  stocks!: Array<Stock>;
  selectedStock!: Stock;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private route: Router
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
    else{
      this.selectedStock = new Stock();
    }
  }

  private loadingData() {
    this.dataService.getStocks().subscribe(
      stocks => {
        this.stocks = stocks;
        this.subscribeQueryParams();
      }
    );
  }

  navigateToView(id: number) {
    this.route.navigate(['admins', 'admin', 'stocks'], {queryParams: {action: 'view', id: id}});
  }

}

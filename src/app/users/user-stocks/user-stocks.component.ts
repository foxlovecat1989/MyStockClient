import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Stock } from 'src/app/model/Stock';

@Component({
  selector: 'app-user-stocks',
  templateUrl: './user-stocks.component.html',
  styleUrls: ['./user-stocks.component.css']
})
export class UserStocksComponent implements OnInit {

  stocks!: Array<Stock>;
  action!: string;
  selectedStockId!: number;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.loadingData();

  }

  private subscribeQueryParams() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        const id = params['id'];
        this.action = params['action'];
        if (id) {
          this.selectedStockId = id;
          this.dataService.addStockToWatch(this.selectedStockId, 1, 1).subscribe(
            next => {
              // TODO: Add data to server
              console.log('Added Success');
            },
            error => {
              console.log('Added Failed');
            }
          );
        }
      }
    );
  }

  private loadingData() {
    this.dataService.getStocks().subscribe(
      stocks => {
        this.stocks = stocks;
      },
      error => {
        console.log('error', error);
      }
    );
    this.subscribeQueryParams();
  }

  navigateToAdd(id: number){
    this.route.navigate(['users', 'stocks'], {queryParams: {id : id}});
  }

}

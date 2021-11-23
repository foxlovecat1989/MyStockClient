import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Stock } from 'src/app/model/Stock';


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

  message = '';

  constructor(
    private dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  edit(){
    this.router.navigate(['admins', 'stocks'], {queryParams: {action: 'edit', id: this.stock.id}});
  }

  delete(){
    this.message = 'Deleting data, please wait...';
    this.dataService.deleteStock(this.stock.id).subscribe(
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

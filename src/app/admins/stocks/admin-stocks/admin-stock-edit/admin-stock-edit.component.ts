import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Classify } from 'src/app/model/Classify';
import { Stock } from 'src/app/model/Stock';
import { ClassifyService } from 'src/app/services/ClassifyService/classify.service';
import { StockService } from 'src/app/services/StockService/stock.service';

@Component({
  selector: 'admin-stock-edit',
  templateUrl: './admin-stock-edit.component.html',
  styleUrls: ['./admin-stock-edit.component.css']
})
export class AdminStockEditComponent implements OnInit {

  @Input('stock')
  stock!: Stock;
  @Output('dataReloadEvent')
  dataReloadEvent = new EventEmitter();
  isLoadingData = true;
  classifies!: Array<Classify>;
  message= 'Loading Data, please wait...';
  stockForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private stockService: StockService,
    private classifyService: ClassifyService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadingData();

  }

  private loadingData() {
    this.classifyService.getClassifies().subscribe(
      classifies => {
        this.classifies = classifies;
        this.initForm();
      },
      error => {
        this.message = 'Fail to lode data...'
      }
    );
  }

  private initForm() {
    this.stockForm = this.formBuilder.group({
      id: this.stock.id,
      stockName: [this.stock.name, Validators.required],
      symbol: [this.stock.symbol, Validators.required]
    });

    this.classifies.forEach(
      classify => this.stockForm.addControl("classify", this.formBuilder.control(classify))
    );

    this.isLoadingData = false;
    this.message = '';
  }

  save(){
    this.stock.name = this.stockForm.controls['stockName'].value;
    this.stock.symbol = this.stockForm.controls['symbol'].value;
    this.stock.classify = this.stockForm.controls['classify'].value;
    this.message = 'Saving data, please wait...';
    if(this.stock.id)
      this.saveEditStock();
    else{
      this.saveAddStock();
    }
  }


  private saveEditStock() {
    this.stockService.updateStock(this.stock).subscribe(
      stock => {
        this.stock = stock;
        this.dataReloadEvent.emit();
        this.router.navigate(['admins', 'stocks'], { queryParams: { action: 'view', id: this.stock.id } });
      },
      error => this.message = 'Fail to Save data...'
    );
  }

  private saveAddStock() {
    this.stockService.addStock(this.stock).subscribe(
      stock => {
        this.stock = stock;
        this.dataReloadEvent.emit();
        this.router.navigate(['admins', 'stocks'], { queryParams: { action: 'view', id: this.stock.id } });
      },
      error => this.message = 'Fail to Save data...'
    );
  }
}

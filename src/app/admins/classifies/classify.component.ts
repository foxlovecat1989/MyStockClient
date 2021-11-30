import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classify } from 'src/app/model/Classify';
import { Stock } from 'src/app/model/Stock';
import { ClassifyService } from 'src/app/services/classify.service';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})
export class ClassifyComponent implements OnInit {

  classifies!: Array<Classify>;
  action!: string;
  selectedClassify!: Classify;
  stocks!:Array<Stock>;
  message = 'Loading data, please wait...';
  isLoadingData = true;
  isChildLoadingData = false;
  toChildMessage = '';

  constructor(
    private classifyService: ClassifyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadingData();
  }

  public loadingData() {
    this.classifyService.getClassifies().subscribe(
      classify => {
        this.isLoadingData = false;
        this.message = '';
        this.classifies = classify;
        this.subscribeQueryParams();
      },
      error => this.message = 'Fail to Load Data...'
    );
  }

  private subscribeQueryParams() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        const id = params['id'];
        this.action = params['action'];
        if(id){  // under view or edit mode
            this.isChildLoadingData = true;
            this.toChildMessage = 'Loading Data, please wait...';
            this.selectedClassify = this.classifies.find(classify => classify.classifyId === +id)!;
            if (this.action === 'view' && this.selectedClassify)  // because of delay - selectedClassify could be null tempory
              this.getStocksByClassifyId();
        } else{   // under add mode
          this.selectedClassify = new Classify();
        }
      },
      error => this.message = 'Get QueryParams Fails'
    );
  }

  view(id: number){
    this.router.navigate(['admins', 'classifies'], {queryParams: {id: id, action: 'view'}});
  }

  add(){
    this.router.navigate(['admins', 'classifies'], {queryParams: {action: 'add'}});
  }
  private getStocksByClassifyId() {
    this.classifyService.findStocksByClassifyId(this.selectedClassify.classifyId).subscribe(
      stocks => {
        this.stocks = stocks;
        this.isChildLoadingData = false;
        this.toChildMessage = '';
      },
      error => this.message = 'Get Stocks Fail...'
    );
  }
}

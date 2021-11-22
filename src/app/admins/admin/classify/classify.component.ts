import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Classify } from 'src/app/model/Classify';
import { Stock } from 'src/app/model/Stock';

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

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadingData();
  }

  private loadingData() {
    this.dataService.getClassifies().subscribe(
      classify => {
        this.classifies = classify;
      },
      error => {
        console.log('error', error);
      }
    );

    this.subscribeQueryParams();
  }

  private subscribeQueryParams() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        const id = params['id'];
        this.action = params['action'];
        if (id) {
          this.selectedClassify = this.classifies.find(classify => classify.classifyId === +id)!;
          this.getStocksByClassifyId();
        } else {
          this.selectedClassify = new Classify();
        }
      }
    );
  }

  navigateToView(id: number){
    this.router.navigate(['admins', 'admin', 'classifies'], {queryParams: {id: id, action: 'view'}});
  }

  navigateToAdd(){
    this.router.navigate(['admins', 'admin', 'classifies'], {queryParams: {action: 'add'}});
  }

  private getStocksByClassifyId() {
    this.dataService.findStocksByClassifyId(this.selectedClassify.classifyId).subscribe(
      stocks => {
        this.stocks = stocks;
      },
      error => {
        console.log('findStocksByClassifyId fail', error);
      }
    );
  }
}

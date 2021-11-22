import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classify } from 'src/app/model/Classify';
import { Stock } from 'src/app/model/Stock';

@Component({
  selector: 'classify-detail',
  templateUrl: './classify-detail.component.html',
  styleUrls: ['./classify-detail.component.css']
})
export class ClassifyDetailComponent implements OnInit {

  @Input('classify')
  classify!: Classify;

  @Input('isLoadingData')
  isLoadingData!: boolean;

  @Input('message')
  message!: string;

  @Input('stocks')
  stocks!: Array<Stock>;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  edit(id: number){
    this.router.navigate(['admins', 'admin', 'classifies'], {queryParams: {action: 'edit', id: id}});
  }

  delete(id: number){

  }
}

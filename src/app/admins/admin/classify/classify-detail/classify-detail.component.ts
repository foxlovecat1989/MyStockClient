import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';
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

  @Input('stocks')
  stocks!: Array<Stock>;

  constructor() { }

  ngOnInit(): void {

  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Classify } from 'src/app/model/Classify';

@Component({
  selector: 'classify-edit',
  templateUrl: './classify-edit.component.html',
  styleUrls: ['./classify-edit.component.css']
})
export class ClassifyEditComponent implements OnInit {

  @Input('classify')
  classify!: Classify;
  @Output('dataChangeEvent')
  dataChangeEvent = new EventEmitter();
  isLoadingData = true;
  message = 'Loading data, please wait...';
  classifyForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {

    this.classifyForm = this.formBuilder.group({
      id: this.classify.classifyId,
      classifyName: [this.classify.name, Validators.required]
    });

    this.isLoadingData = false;
    this.message = '';
  }

  save(){
    this.classify.name = this.classifyForm.controls['classifyName'].value;
    this.message = 'Saving data, please wait...';
    if(this.classify.classifyId)
      this.saveEditClassify();
    else
      this.saveAddClassify();
  }

  private saveEditClassify(){
    this.dataService.updateClassify(this.classify).subscribe(
      classify => {
        this.classify = classify;
        this.dataChangeEvent.emit();
        this.router.navigate(['admins', 'classifies'], { queryParams: { action: 'view', id: this.classify.classifyId } });
      },
      error => this.message = 'Fail to Save Edit Classify'
    );
  }

  private saveAddClassify(){
    this.dataService.addClassify(this.classify).subscribe(
      classify => {
        this.classify = classify;
        this.dataChangeEvent.emit();
        this.router.navigate(['admins', 'classifies'], { queryParams: { action: 'view', id: this.classify.classifyId } });
      },
      error => this.message = 'Fail to Save Add Classify'
    );
  }

}

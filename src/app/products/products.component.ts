import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProductService} from '../shared/services/product.service';
import {ifTrue} from "codelyzer/util/function";
import {until} from "selenium-webdriver";
import alertIsPresent = until.alertIsPresent;

declare var $: any;
declare var _: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  imagUrl: string = 'http://lorempixel.com/100/100';
  obj: any;
  HDMICheck:boolean;

  constructor(private http: Http,
              public _currentproductServices: ProductService) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this._currentproductServices.getData().subscribe((res) => {
      this.obj = res;
    });
  }

  get searchproductQuery() {
    return this._currentproductServices.searchproductItem;
  }

  HDMICheckBoxChanged(value:boolean) {
    this.HDMICheck = value;
    console.log(this.HDMICheck);
    if (this.HDMICheck === true){
      alert('hi')
    }else{
      alert('by')
    }
  }
}

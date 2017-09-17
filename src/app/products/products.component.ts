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
  obj: any = [];
  HDMICheck: boolean;
  filterload: any = [];

  constructor(private http: Http,
              public _currentproductServices: ProductService) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this._currentproductServices.getData().finally(()=> {
      this.choesing(0);
    }).subscribe((res) => {
      this.obj = res;
    });
  }

  get searchproductQuery() {
    return this._currentproductServices.searchproductItem;
  }

  HDMICheckBoxChanged(value: boolean) {
    this.HDMICheck = value;
    if (this.HDMICheck === true) {
      this.choesing(1);
      console.log('hi');
    } else {
      this.choesing(0);
      console.log('by');
    }
  }

  choesing(d: number) {

    if (d === 0) {
      this.filterload = this.obj;
    } else {
      debugger;
      const filter = [];
      _.find(this.filterload, function (entry) {
        debugger;
        console.log(entry);
        if (entry.productid === d) {
          filter.push({entry});
        }
      });
      this.filterload.push(filter);
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProductService} from '../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  imagUrl: string = 'http://lorempixel.com/100/100';
  obj:any;

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
}

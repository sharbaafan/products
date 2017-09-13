import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  private basePath: string;

  constructor(private http: Http) {
    this.basePath = '/assets/data.json';
  }

  getData() {
    return this.http.get(this.basePath).map(r => r.json());
  }
}


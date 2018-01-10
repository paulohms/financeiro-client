import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
 
import { Financa } from './financa';
 
@Injectable()
export class FinancasService {
 
  private financaUrl = 'http://localhost:8080/financeiro';
  private headers: Headers;
  private options: RequestOptions;

  getFinancas(): Observable<Financa[]> {
    return this.http.get(this.financaUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
 
  getFinanca(financa) { }
 
  addFinanca(financa: Financa) {
    return this.http.post(this.financaUrl, financa, this.options)
        .map(this.extractData)
        .catch(this.handleError);
   }
 
  delFinanca(id: number) { 
    return this.http.delete(`${this.financaUrl}/${id}`, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }
 
  private extractData(res: Response) {
    let data = res.json();
    return data || [];
  }
 
  private handleError(error: Response | any) {
    let errMsg = (error['_body']) ? JSON.parse(error['_body']).msg : 'Server error';
    return Observable.throw(errMsg);
  }
 
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
 
}
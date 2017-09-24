import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {RequestOptions, Request, RequestMethod, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class EntriesService {
 //List: Array<Object> = list;
  constructor(private http: Http) { }
  
  
  getList() {
    return this.http.get('http://localhost:3000/api/journal-entries')
    .map(( res: Response ) => res.json() );
  }

  getListDetail(id) {
    return this.http.get('http://localhost:3000/api/journal-entries/'+id)
    .map(( res: Response ) => res.json() );
  }
  pushListDetail(formData){
      
    let options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/json');
    formData = JSON.stringify(formData);
    this.http.post('http://localhost:3000/api/journal-entries', formData, options)
    .map(res => res.json()) 
    .subscribe();
      
  }
}

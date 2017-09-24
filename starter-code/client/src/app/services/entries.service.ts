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
   
    
    console.log("formData", formData);
    console.log("inside pushListDetail", formData);
    
    let options = new RequestOptions();
    options.headers = new Headers();
    
    //options.headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
    options.headers.append('Content-Type', 'application/json');
    //let myobj= {title: "first", content:"mycontent"};
    formData = JSON.stringify(formData);
    this.http.post('http://localhost:3000/api/journal-entries', formData, options)
    .map(res => res.json()) // ...and calling .json() on the response to return data
    
    .subscribe();
      
  }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
}

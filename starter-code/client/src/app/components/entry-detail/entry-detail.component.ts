import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntriesService } from '../../services/entries.service'


@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {
  listID: String;
  listitem: Object = {}
  constructor(private route: ActivatedRoute, private theEntries: EntriesService) { }
  

  ngOnInit() {
    this.route.params.subscribe( (params) => { 
      this.listID = params['id'];
      this.theEntries.getListDetail(this.listID).subscribe((myjson) => {
        this.listitem = myjson;
        
      });
      
    });
  }

}



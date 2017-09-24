import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../../services/entries.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  constructor(private theEntry: EntriesService) { }
  
  list: Array<any> = [];
  keysArr: Array<string> = [];
  
  ngOnInit() {
    document.getElementById('formwrapper').style.display = "none";
    this.getList();

    }
    slideForm(){
      document.getElementById('formwrapper').style.display="block";

    }

    getList() {
      this.theEntry.getList()
       .subscribe(( myjson  ) => {
         this.list = myjson;
        //  this.keysArr = Object.keys(myjson)
        });
    }
    submitForm(formData){
      console.log(formData);
      this.theEntry.pushListDetail(formData);
    }

  }

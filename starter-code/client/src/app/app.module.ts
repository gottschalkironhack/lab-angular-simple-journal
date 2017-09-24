import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EntriesService } from './services/entries.service';
import { AppComponent } from './app.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EntryDetailComponent } from './components/entry-detail/entry-detail.component';

// PIPES //
import { KeysPipe } from './pipes/keys.pipe';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: EntryListComponent },
  { path: 'entries/:id', component: EntryDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EntryDetailComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

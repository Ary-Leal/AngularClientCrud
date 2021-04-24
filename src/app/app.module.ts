import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';

import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialListComponent,
    TutorialDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,  ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import {HighLightDirective} from './structucal.directive';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent,HighLightDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}

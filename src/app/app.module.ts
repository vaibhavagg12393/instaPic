import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home.component';
import { MainComponent }  from './components/main.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule],
  declarations: [ AppComponent, HomeComponent, MainComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

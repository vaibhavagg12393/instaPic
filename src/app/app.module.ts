import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home.component';
import { MainComponent }  from './components/main.component';
import { GalleryComponent }  from './components/gallery.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule],
  declarations: [ AppComponent, HomeComponent, MainComponent, GalleryComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

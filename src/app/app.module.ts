import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';



import {RouterModule, Routes} from "@angular/router";


  // Initialize Firebase
//export const firebaseConfig = {
//    apiKey: "AIzaSyCLGtcFXBMd1jz4P_73iod-8eEjeKYK1BA",
//    authDomain: "proj1-125d9.firebaseapp.com",
//    databaseURL: "https://proj1-125d9.firebaseio.com",
//    projectId: "proj1-125d9",
//    storageBucket: "proj1-125d9.appspot.com",
//    messagingSenderId: "664043289854"
//  };



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

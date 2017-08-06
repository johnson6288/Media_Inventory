import { Component } from '@angular/core';
import {Media} from './media';
// Import class so we can register it as dependency injection token
import {MediaDataService} from './media-data.service';

import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MediaDataService]
})
export class AppComponent {

   

  newMedia: Media = new Media();
  //newMedia: Media = [{id: 1, title: 'Sonic', type: 'PS4', active: true, extrainfo: 'PS4 Game'}];
  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `MediaDataService`
  // and assign it to a property called `mediaDataService`
  constructor(private mediaDataService: MediaDataService) {
  }
  types = ['PS2', 'Gameboy', 'NES', 'SNES', 'Sega Genesis', 'DVD', 'VHS', 'CD', 'Cassette', 'Book'];
  
  //newMedia: Media = {id: 0, title: 'Sonic', type: 'PS4', extrainfo: 'PS4 Game', active: true };
 
  
  addMedia() {
    this.mediaDataService.addMedia(this.newMedia);
    this.newMedia = new Media();
  }

  toggleMediaActive(media) {
    this.mediaDataService.toggleMediaActive(media);
  }

  removeMedia(media) {
    this.mediaDataService.deleteMediaById(media.id);
  }
  
  updateMedia(media){
	this.mediaDataService.updateMediaById(media.id);
  }


  get medias() {
    return this.mediaDataService.getAllMedias();
  }



}

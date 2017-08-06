import { Injectable } from '@angular/core';
import {Media} from './media';

@Injectable()
export class MediaDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for media's
  medias: Media[] = [
  	{id: 0, title: 'Sonic All Starts', type: 'PS4', extrainfo: 'PS2 Game', active: true },
  	{id: 1, title: 'Super Mario Brothers', type: 'NES', extrainfo: '', active: true },
  	{id: 2, title: 'Yoshi', type: 'Gameboy', extrainfo: 'broken cartridge', active: false },
  	{id: 3, title: 'Superman', type: 'DVD', extrainfo: '', active: true },
  	{id: 4, title: 'Sonic Spinball', type: 'Sega Genesis', extrainfo: '', active: true },
  	{id: 5, title: 'Bugs Bunny & Pals', type: 'VHS', extrainfo: '', active: true }];


  constructor() { 
  }
 
 // Simulate POST /medias
  addMedia(media: Media): MediaDataService {
    if (!media.id) {
      media.id = ++this.lastId;
    }
    this.medias.push(media);
    return this;
  }

  // Simulate DELETE /medias/:id
  deleteMediaById(id: number): MediaDataService {
    this.medias = this.medias
      .filter(media => media.id !== id);
    return this;
  }

  // Simulate PUT /medias/:id
  updateMediaById(id: number, values: Object = {}): Media {
    let media = this.getMediaById(id);
    if (!media) {
      return null;
    }
    Object.assign(media, values);
    return media;
  }

  // Simulate GET /medias
  getAllMedias(): Media[] {
    return this.medias;
  }

  // Simulate GET /medias/:id
  getMediaById(id: number): Media {
    return this.medias
      .filter(media => media.id === id)
      .pop();
  }

  // Toggle media active
  toggleMediaActive(media: Media){
    let updatedMedia = this.updateMediaById(media.id, {
      active: !media.active
    });
    return updatedMedia;
  }


}



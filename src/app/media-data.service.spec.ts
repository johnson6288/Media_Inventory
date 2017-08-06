import { TestBed, inject } from '@angular/core/testing';
import {Media} from './media';


import { MediaDataService } from './media-data.service';

describe('MediaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaDataService]
    });
  });

  it('should ...', inject([MediaDataService], (service: MediaDataService) => {
    expect(service).toBeTruthy();
  }));
  
  describe('#getAllMedias()', () => {

    it('should return an empty array by default', inject([MediaDataService], (service: MediaDataService) => {
      expect(service.getAllMedias()).toEqual([]);
    }));

    it('should return all medias', inject([MediaDataService], (service: MediaDataService) => {
      let media1 = new Media({title: 'Hello 1', type: 'dvd', extrainfo: 'extra', active: false});
      let media2 = new Media({title: 'Hello 2', type: 'dvd', extrainfo: 'extra', active: true});
      service.addMedia(media1);
      service.addMedia(media2);
      expect(service.getAllMedias()).toEqual([media1, media2]);
    }));

  });

  describe('#save(media)', () => {

    it('should automatically assign an incrementing id', inject([MediaDataService], (service: MediaDataService) => {
      let media1 = new Media({title: 'Hello 1', active: false});
      let media2 = new Media({title: 'Hello 2', active: true});
      service.addMedia(media1);
      service.addMedia(media2);
      expect(service.getMediaById(1)).toEqual(media1);
      expect(service.getMediaById(2)).toEqual(media2);
    }));

  });

  describe('#deleteMediaById(id)', () => {

    it('should remove media with the corresponding id', inject([MediaDataService], (service: MediaDataService) => {
      let media1 = new Media({title: 'Hello 1', active: false});
      let media2 = new Media({title: 'Hello 2', active: true});
      service.addMedia(media1);
      service.addMedia(media2);
      expect(service.getAllMedias()).toEqual([media1, media2]);
      service.deleteMediaById(1);
      expect(service.getAllMedias()).toEqual([media2]);
      service.deleteMediaById(2);
      expect(service.getAllMedias()).toEqual([]);
    }));

    it('should not removing anything if media with corresponding id is not found', inject([MediaDataService], (service: MediaDataService) => {
      let media1 = new Media({title: 'Hello 1', active: false});
      let media2 = new Media({title: 'Hello 2', active: true});
      service.addMedia(media1);
      service.addMedia(media2);
      expect(service.getAllMedias()).toEqual([media1, media2]);
      service.deleteMediaById(3);
      expect(service.getAllMedias()).toEqual([media1, media2]);
    }));

  });

  describe('#updateMediaById(id, values)', () => {

    it('should return media with the corresponding id and updated data', inject([MediaDataService], (service: MediaDataService) => {
      let media = new Media({title: 'Hello 1', active: false});
      service.addMedia(media);
      let updatedMedia = service.updateMediaById(1, {
        title: 'new title'
      });
      expect(updatedMedia.title).toEqual('new title');
    }));

    it('should return null if media is not found', inject([MediaDataService], (service: MediaDataService) => {
      let media = new Media({title: 'Hello 1', active: false});
      service.addMedia(media);
      let updatedMedia = service.updateMediaById(2, {
        title: 'new title'
      });
      expect(updatedMedia).toEqual(null);
    }));

  });

  describe('#toggleMediaActive(media)', () => {

    it('should return the updated media with inverse active status', inject([MediaDataService], (service: MediaDataService) => {
      let media = new Media({title: 'Hello 1', active: false});
      service.addMedia(media);
      let updatedMedia = service.toggleMediaActive(media);
      expect(updatedMedia.active).toEqual(true);
      service.toggleMediaActive(media);
      expect(updatedMedia.active).toEqual(false);
    }));

  });
});

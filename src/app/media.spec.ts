import {Media} from './media';

describe('Media', () => {
  it('should create an instance', () => {
    expect(new Media()).toBeTruthy();
  });
   
   it('should accept values in the constructor', () => {
    let media = new Media({
      title: 'test',
      type: 'dvd',
      extrainfo: 'extra!',
      active: true
    });
    expect(media.title).toEqual('test');
    expect(media.type).toEqual('dvd');
    expect(media.extrainfo).toEqual('extra!');
    expect(media.active).toEqual(true);
  });
});

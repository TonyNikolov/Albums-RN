import { Request } from '../shared';

function getAlbums() {
  return Request({
    url: '/music_albums',
    method: 'GET',
  });
}

const Data = {
  getAlbums, // update, delete, etc. ...
};

export default Data;

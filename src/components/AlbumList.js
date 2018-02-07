// import libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Data from '../data/Data';
import AlbumDetail from './AlbumDetail';

// make component
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    console.log('component will mount in album list');

    Data.getAlbums().then(response => this.setState({ albums: response }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;

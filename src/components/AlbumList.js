// import libraries
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Data from '../data/Data';

// make component
class AlbumList extends Component {
  componentWillMount() {
    console.log('component will mount in album list');

    Data.getAlbums().then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;

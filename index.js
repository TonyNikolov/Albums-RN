import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Header, AlbumList } from './src/components';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText="Albums" />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('AlbumsRN', () => App);

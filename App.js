import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header'
import Heading from './components/heading'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text='Standup Analytica' />
        <Heading text='Whatcha did, Whatcha doin, Whatcha gonna do' />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',

  },
});

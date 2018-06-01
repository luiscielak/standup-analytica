import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header'
import Heading from './components/heading'

import { Button } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text='Standup Analytica' />
        <Heading text='Whatcha did, Whatcha doin, Whatcha gonna do' />

        <Button
          title="Stand Up!"
          color="#FF9500"
        />

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

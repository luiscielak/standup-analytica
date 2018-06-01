import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header'
import Paragraph from './components/paragraph'
import Button from './components/button'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',


  },
});


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text='Standup Analytica' />
        <Paragraph text='Whatcha did, Whatcha doin, Whatcha gonna do' />

        <Button
          title="Stand Up!"

        />
        <Paragraph text='Didcha do what ya said you would?' />

      </View>
    );
  }
}

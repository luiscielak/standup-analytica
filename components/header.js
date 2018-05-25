import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from './heading'

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Heading text={ this.props.text } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  }
});

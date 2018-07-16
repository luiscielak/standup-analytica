import React, { PureComponent } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

export default class Header {
  render () {
    return (
      <View>
        <Text>{ this.props.text }</Text>
      </View>
    )
  }
}
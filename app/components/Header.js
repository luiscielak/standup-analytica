import React, { PureComponent } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

export default class Header extends PureComponent {
  render () {
    return (
      <View>
        <Text>Clients</Text>
      </View>
    )
  }
}
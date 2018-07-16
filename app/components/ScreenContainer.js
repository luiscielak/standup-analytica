import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

export default class ScreenContainer {
  render () {
    return (
      <View style={styles.container} children={this.props.children} />
    )
  }
}
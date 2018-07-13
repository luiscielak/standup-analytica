import React, { PureComponent } from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

export default class ScreenContainer {
  render () {
    <View style={styles.container}>
      { this.props.children }
    </View>
  }
}
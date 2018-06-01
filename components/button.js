import React from 'react';
import { Button as RNButton, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  buttonText: {
    color: '#ff9500',
  }
});

export default class Button extends React.Component {
  render() {
    return (
      <View>
        <RNButton style={styles.buttonText}
          title="Stand Up!"
        />
      </View>
    );
  }
}


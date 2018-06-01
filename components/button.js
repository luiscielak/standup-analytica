import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#ff9500',
    alignItems: 'center',
    maxWidth: 150
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  }
});

export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
         style={styles.button}
         onPress={ () => console.log('hi') }
      >
        <Text style={styles.buttonText}>
           { this.props.title }
        </Text>
      </TouchableOpacity>
    );
  }
}






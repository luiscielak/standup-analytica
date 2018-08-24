import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  paragraph: {
    color: '#cc0000',
    fontSize: 14,
  }
});


export default class Paragraph extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.paragraph}>
          { this.props.text }
        </Text>
      </View>
    );
  }
}


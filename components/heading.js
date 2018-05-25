import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Heading extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.headerText}>
          { this.props.text }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    color: '#ffffff',
    fontSize: 18,
  }
});

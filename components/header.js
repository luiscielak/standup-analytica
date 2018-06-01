import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
  headerText: {
    fontSize: 18,
    color: '#ffffff',

  }
});



export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>
          { this.props.text }
        </Text>
      </View>
    );
  }
}

import React, { PureComponent } from 'react';

import { StyleSheet, View, Text } from 'react-native'

import ScreenContainer from '../components/ScreenContainer'
import Header from '../components/Header'


export default class ClientList extends PureComponent {
  render () {
    return (
      <ScreenContainer>
        <View>
          <Header text='Standup Analytica' />
        </View>
      </ScreenContainer>
    )
  }
}
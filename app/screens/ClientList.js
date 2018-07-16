import React, { PureComponent } from 'react';
import { View, Text } from 'react-native'

import ScreenContainer from '../components/ScreenContainer'

export default class ClientList extends PureComponent {
  render () {
    return (
      <ScreenContainer>
        <View>
          <Header text='Standup Analytica' />

          <Paragraph text='Whatcha did, Whatcha doin, Whatcha gonna do' />

          <Button title="Stand Up!" />

          <Paragraph text='Didcha do what ya said you would?' />
        </View>
      </ScreenContainer>
    )
  }
}
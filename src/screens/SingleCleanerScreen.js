import React from 'react'
import { View ,Text} from 'react-native'
import Header from '../components/Header'

export default function SingleCleanerScreen() {
  return (
      <View>
          <Header iconLeft="arrowleft" />
          <Text>Confirm selection</Text>
          <Text>You have selected Phineas Munene .Please confirm to complete</Text>        
      </View>
  )
}

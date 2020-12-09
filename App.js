import React, { useEffect } from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import userStore from './src/mobx/UserStore'
import Fetch from './src/logic/Fetch'
import Logger from './src/utils/Logger'
import LoginScreen from './src/screens/login/LoginScreen'

const Drawer = createDrawerNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen
          name='Home'
          component={LoginScreen}
          options={{
            title: 'Sair',
            headerLeft: () => (
              <Button
                onPress={() => alert('this is a button')}
                color='#FFF'
                title='info'
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

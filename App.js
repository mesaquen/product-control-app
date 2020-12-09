import React, { useEffect } from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import userStore from './src/mobx/UserStore'
import Fetch from './src/logic/Fetch'
import Logger from './src/utils/Logger'

const HomeScreen = observer(() => {
  useEffect(() => {
    const body = JSON.stringify({
      identifier: 'email',
      password: 'password'
    })
    Logger.log(body)
    Fetch('/auth/local', {
      method: 'POST',
      body
    })
      .then(response => response.json())
      .then(data => {
        Logger.log(data)
        userStore.setUserContext(data)
      })
      .catch(Logger.error)
  }, [])
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(userStore.userContext)}</Text>
    </SafeAreaView>
  )
})

const Drawer = createDrawerNavigator()

export default function App () {
  return (
    
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen
            name='Home'
            component={HomeScreen}
            options={{
              title: 'My home',
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

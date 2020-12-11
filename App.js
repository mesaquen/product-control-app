import React, { useEffect } from 'react'
import { Button, View, Text, SafeAreaView, StatusBar } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { observer } from 'mobx-react-lite'
import userStore from './src/mobx/UserStore'
import Fetch from './src/logic/Fetch'
import Logger from './src/utils/Logger'
import ProductList from './src/screens/product-list/ProductList'
import LoginScreen from './src/screens/login/LoginScreen'

const Drawer = createDrawerNavigator()

export default function App () {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar />
        <Drawer.Navigator initialRouteName='ProductList'>
          <Drawer.Screen
            name='ProductList'
            component={ProductList}
            options={{
              title: 'Produtos disponíveis'
            }}
          />
          <Drawer.Screen
            name='Login'
            component={LoginScreen}
            options={{
              title: 'Sair'
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

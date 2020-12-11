import React, { useEffect } from 'react'
import { Button, View, Text, SafeAreaView, StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { observer } from 'mobx-react-lite'
import userStore from './src/mobx/UserStore'
import Fetch from './src/logic/Fetch'
import Logger from './src/utils/Logger'
import ProductList from './src/screens/product-list/ProductList'
import LoginScreen from './src/screens/login/LoginScreen'

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar />
        <Tab.Navigator initialRouteName='ProductList'>
          <Tab.Screen
            name='ProductList'
            component={ProductList}
            options={{
              title: 'Produtos disponíveis'
            }}
          />
          <Tab.Screen
            name='Catalog'
            component={ProductList}
            options={{
              title: 'Gerenciar Catálogo'
            }}
          />
          <Tab.Screen
            name='Login'
            component={LoginScreen}
            options={{
              title: 'Conta'
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

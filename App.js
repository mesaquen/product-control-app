import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {
  DefaultTheme,
  Colors,
  Provider as PaperProvider
} from 'react-native-paper'
import { MaterialCommunityIcons as MCI } from '@expo/vector-icons'
import ProductList from './src/screens/product-list/ProductList'
import LoginScreen from './src/screens/login/LoginScreen'
import CatalogScreen from './src/screens/catalog/CatalogScreen'

const Tab = createBottomTabNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: Colors.grey700
  }
}

const icons = {
  ProductList: {
    default: 'view-list'
  },
  Catalog: {
    default: 'tune'
  },
  Login: {
    default: 'account-outline',
    focused: 'account'
  }
}

const getIconName = (focused, route) => {
  const key = focused ? 'focused' : 'default'
  return icons[route.name]?.[key] ?? icons[route.name]?.default
}

export default function App () {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar />
        <Tab.Navigator
          initialRouteName='ProductList'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              const iconName = getIconName(focused, route)
              return <MCI name={iconName} size={size} color={color} />
            }
          })}
        >
          <Tab.Screen
            name='ProductList'
            component={ProductList}
            options={{
              title: 'Produtos disponíveis'
            }}
          />
          <Tab.Screen
            name='Catalog'
            component={CatalogScreen}
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

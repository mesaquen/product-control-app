import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
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
import ProductForm from './src/screens/product-form/ProductForm'
import { observer } from 'mobx-react'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

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

const CatalogStackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName='CatalogList'
      screenOptions={{
        headerTintColor: Colors.white,
        headerStyle: {
          backgroundColor: theme.colors.primary
        }
      }}
    >
      <Stack.Screen name="CatalogList" component={CatalogScreen}/>
      <Stack.Screen name='ProductForm' component={ProductForm} />
    </Stack.Navigator>
  )
}

export default function App () {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor={theme.colors.primary} />
        <Tab.Navigator
          initialRouteName='ProductList'
          tabBarOptions={{
            activeTintColor: theme.colors.primary
          }}
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
            component={CatalogStackScreen}
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

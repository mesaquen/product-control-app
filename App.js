import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  DefaultTheme,
  Colors,
  Provider as PaperProvider,
  Text,
  Button
} from 'react-native-paper'
import { MaterialCommunityIcons as MCI } from '@expo/vector-icons'
import ProductList from './src/screens/product-list/ProductList'
import LoginScreen from './src/screens/login/LoginScreen'
import CatalogScreen from './src/screens/catalog/CatalogScreen'
import ProductForm from './src/screens/product-form/ProductForm'
import AppIntroSlider from 'react-native-app-intro-slider'
import { observer } from 'mobx-react'
import IconMessage from './src/component/icon-message/IconMessage'

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
      <Stack.Screen
        name='CatalogList'
        component={CatalogScreen}
        options={{ title: 'Catálogo' }}
      />
      <Stack.Screen name='ProductForm' component={ProductForm} />
    </Stack.Navigator>
  )
}

const SLIDES = [
  {
    key: 'k1',
    title: 'Product control app',
    text: 'Bem vindo ao app de controle de produto'
  },
  {
    key: 'k2',
    icon: icons.ProductList.default,
    title: 'Produtos disponíveis',
    text: 'Use esse menu para vizualizar os produtos ativos'
  },
  {
    key: 'k3',
    icon: icons.Catalog.default,
    title: 'Gerenciar catálogo',
    text: 'Aqui você pode adicionar, editar ou remover produtos'
  },
  {
    key: 'k4',
    icon: icons.Login.default,
    title: 'Conta',
    text: 'Use esse menu para acessar sua conta'
  }
]

export default function App () {
  const [showSlide, setShowSlide] = useState(true)
  const hideSlide = () => setShowSlide(false)

  const renderSliderItem = ({item}) => (
    <SafeAreaView style={{flex: 1}}>
      <IconMessage icon={item.icon} title={item.title} subtitle={item.text}/>
    </SafeAreaView>
  )

  const renderSkipButton = props => <Button {...props}>Pular</Button>
  const renderNextButton = props => <Button {...props}>Próximo</Button>
  const renderDoneButton = props => <Button {...props}>Começar</Button>

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.primary} />
      {showSlide ? (
        <AppIntroSlider
          data={SLIDES}
          onDone={hideSlide}
          onSkip={hideSlide}
          renderItem={renderSliderItem}
          renderSkipButton={renderSkipButton}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          showSkipButton
        />
      ) : (
        <NavigationContainer>
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
      )}
    </PaperProvider>
  )
}

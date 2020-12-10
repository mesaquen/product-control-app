import { observer } from 'mobx-react'
import React, { useState } from 'react'
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  StatusBar,
  Text
} from 'react-native'
import LoginForm from '../../component/login-form/LoginForm'
import Fetch from '../../logic/Fetch'
import userStore from '../../mobx/UserStore'
import Logger from '../../utils/Logger'
import styles from './LoginScreen.styles'

const LoginScreen = observer(() => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async ({ identifier, password }) => {
    setLoading(true)
    try {
      const method = 'POST'
      const body = JSON.stringify({
        identifier,
        password
      })

      const response = await Fetch('/auth/local', {
        method,
        body
      })
      debugger
      if (response.ok) {
        const userContext = await response.json()
        userStore.setUserContext(userContext)
      }
    } catch (e) {
      Logger.error(e)
    } finally {
      setLoading(false)
    }
  }

  if (userStore.userContext) {
    const {
      user: { email, username }
    } = userStore.userContext
    return (
      <SafeAreaView style={styles.container}>
        <Text>{username}</Text>
        <Text>{email}</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <LoginForm onSubmit={handleSubmit} loading={loading} />
    </SafeAreaView>
  )
})

export default LoginScreen

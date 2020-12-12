import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { Snackbar } from 'react-native-paper'
import LoginForm from '../../component/login-form/LoginForm'
import UserAccountDetails from '../../component/user-account-details/UserAccountDetails'
import Fetch from '../../logic/Fetch'
import userStore from '../../mobx/UserStore'
import styles from './LoginScreen.styles'

const LoginScreen = observer(() => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleError = error => {
    const errorMessages = error.message ?? []
    const messageObject = errorMessages[0] ?? {}
    const firstMessage = messageObject.messages?.[0] ?? {}
    const message = firstMessage.message
    setError(message)
  }

  const clearError = () => setError(null)

  const handleSubmit = async ({ identifier, password }) => {
    setLoading(true)

    try {
      const method = 'POST'
      const body = JSON.stringify({
        identifier,
        password
      })

      const userContext = await Fetch('/auth/local', {
        method,
        body
      })

      userStore.setUserContext(userContext)
    } catch (e) {
      handleError(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        {userStore.userContext ? (
          <UserAccountDetails />
        ) : (
          <LoginForm onSubmit={handleSubmit} loading={loading} />
        )}
      </View>
      <Snackbar visible={error} onDismiss={clearError}>
        {error}
      </Snackbar>
    </SafeAreaView>
  )
})

export default LoginScreen

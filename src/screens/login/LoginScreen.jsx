import React, { useState } from 'react'
import { SafeAreaView, TextInput, Button } from 'react-native'
import styles from './LoginScreen.styles'
const LoginScreen = () => {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')

  const handleChangePassword = value => setPassword(value)
  const handleChangeIdentifier = value => setIdentifier(value)
  const handlePress = () => void 0

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        type='email'
        placeholder='email'
        onChangeText={handleChangeIdentifier}
      />
      <TextInput
        style={styles.input}
        type='password'
        placeholder='senha'
        onChangeText={handleChangePassword}
        secureTextEntry
      />
      <Button title='Continuar' />
    </SafeAreaView>
  )
}

export default LoginScreen

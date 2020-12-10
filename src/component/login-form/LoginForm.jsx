import React, { useState } from 'react'
import { TextInput, ActivityIndicator, Button } from 'react-native'
import { observer } from 'mobx-react'
import styles from './LoginForm.styles'

const LoginForm = observer(({ loading, onSubmit }) => {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')

  const handleChangePassword = value => setPassword(value)
  const handleChangeIdentifier = value => setIdentifier(value)

  const handlePress = () => {
    onSubmit({
      identifier,
      password
    })
  }

  return (
    <>
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
      {loading ? (
        <ActivityIndicator color='#0000FF' />
      ) : (
        <Button title='Continuar' onPress={handlePress} />
      )}
    </>
  )
})

export default LoginForm

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {TextInput, Button } from 'react-native-paper'
import { observer } from 'mobx-react'
import styles from './LoginForm.styles'


const LoginForm = observer(({ loading, onSubmit }) => {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [hidePassword, setHidePassword] = useState(true)

  const handleChangePassword = value => setPassword(value)
  const handleChangeIdentifier = value => setIdentifier(value)

  const handlePress = () => {
    onSubmit({
      identifier,
      password
    })
  }

  const togglePasswordVisibility = () => setHidePassword(!hidePassword)

  return (
    <>
      <TextInput
      icon="camera"
        style={styles.input}
        type='email'
        label='email'
        onChangeText={handleChangeIdentifier}
        mode='outlined'
      />
      <TextInput
        style={styles.input}
        type='password'
        label='senha'
        onChangeText={handleChangePassword}
        secureTextEntry={hidePassword}
        mode='outlined'
        right={<TextInput.Icon name="eye" onPress={togglePasswordVisibility}/>}
      />
      <Button onPress={handlePress} loading={loading}>
        Continuar
      </Button>
    </>
  )
})

LoginForm.propTypes = {
  loading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm

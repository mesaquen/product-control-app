import React from 'react'
import IconMessage from '../icon-message/IconMessage'

const ScreenPermissionWarning = ({ navigation }) => {
  const gotoLogin = () => {
    navigation.navigate('Login')
  }
  return (
    <IconMessage
      icon='alert-circle'
      subtitle='Para acessar é necessário fazer login'
      buttonLabel='fazer login'
      onPress={gotoLogin}
    />
  )
}

export default ScreenPermissionWarning

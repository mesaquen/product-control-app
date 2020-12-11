import React from 'react'
import { observer } from 'mobx-react'
import userStore from '../../mobx/UserStore'
import IconMessage from '../icon-message/IconMessage'

const UserAccountDetails = observer(() => {
  const handleLogoff = () => userStore.setUserContext(null)

  if (userStore.userContext) {
    const {
      user: { email, username }
    } = userStore.userContext
    return (
      <IconMessage
      icon="account-circle-outline"
        title={username}
        subtitle={email}
        buttonLabel='Desconectar'
        onPress={handleLogoff}
      />
    )
  }

  return null
})

export default UserAccountDetails

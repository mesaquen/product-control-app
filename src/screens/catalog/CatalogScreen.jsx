import React from 'react'
import { observer } from 'mobx-react'
import { SafeAreaView, Text } from 'react-native'
import userStore from '../../mobx/UserStore'
import ScreenPermissionWarning from '../../component/screen-permission-warning/ScreenPermissionWarning'
import styles from '../../component/common.styles'
const CatalogScreen = observer(({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {userStore.userContext ? (
        <Text>{JSON.stringify(userStore.userContext)}</Text>
      ) : (
        <ScreenPermissionWarning navigation={navigation} />
      )}
    </SafeAreaView>
  )
})

export default CatalogScreen

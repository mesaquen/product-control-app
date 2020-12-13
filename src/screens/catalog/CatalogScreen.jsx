import React, { useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'
import { SafeAreaView, FlatList } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'
import userStore from '../../mobx/UserStore'
import catalogStore from '../../mobx/CatalogStore'
import ScreenPermissionWarning from '../../component/screen-permission-warning/ScreenPermissionWarning'
import ProductListItem from '../../component/product-list-item/ProductListItem'
import Logger from '../../utils/Logger'
import ItemSeparator from '../../component/item-separator/ItemSeparator'
import styles from '../../component/common.styles'

const CatalogScreen = observer(({ navigation }) => {
  const { userContext } = userStore
  const items = catalogStore.products.slice()
  const gotoForm = useCallback(
    params => navigation.navigate('ProductForm', params),
    []
  )

  useEffect(() => {
    const headerRight = userContext
      ? () => <IconButton icon='plus' color={Colors.white} onPress={gotoForm} />
      : null
    navigation.setOptions({
      headerRight
    })
  }, [userContext])

  useEffect(() => {
    if (items.length === 0) {
      const fetchData = async () => {
        try {
          const data = await ProductSource.getProducts()
          catalogStore.setProducts(data)
        } catch (e) {
          Logger.error(e)
        }
      }

      fetchData()
    }
  }, [])

  const handleEdit = id => {
    gotoForm({ id })
  }
  const handleRemove = () => {}

  const renderItem = ({ item }) => {
    return (
      <ProductListItem
        id={item.id}
        name={item.name}
        enabled={item.enabled}
        onEdit={handleEdit}
        onRemove={handleRemove}
        description={item.description}
      />
    )
  }
  const keyExtractor = item => item.id.toString()

  return (
    <SafeAreaView style={styles.container}>
      {userStore.userContext ? (
        <FlatList
          data={items}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      ) : (
        <ScreenPermissionWarning navigation={navigation} />
      )}
    </SafeAreaView>
  )
})

export default CatalogScreen

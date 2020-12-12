import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { SafeAreaView, FlatList } from 'react-native'
import userStore from '../../mobx/UserStore'
import catalogStore from '../../mobx/CatalogStore'
import ScreenPermissionWarning from '../../component/screen-permission-warning/ScreenPermissionWarning'
import ProductListItem from '../../component/product-list-item/ProductListItem'
import Logger from '../../utils/Logger'
import ItemSeparator from '../../component/item-separator/ItemSeparator'

const CatalogScreen = observer(({ navigation }) => {
  const items = catalogStore.products.slice()
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

  const handleEdit = () => {}
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
    <SafeAreaView>
      {userStore.userContext ? (
        <FlatList
          data={items}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      ) : (
        <ScreenPermissionWarning />
      )}
    </SafeAreaView>
  )
})

export default CatalogScreen

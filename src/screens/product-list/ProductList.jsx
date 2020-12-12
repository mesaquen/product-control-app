import React, { useEffect, useState } from 'react'
import { ScrollView, FlatList } from 'react-native'
import { observer } from 'mobx-react'
import catalogStore from '../../mobx/CatalogStore'
import { getProducts } from '../../logic/ProductSource'
import Logger from '../../utils/Logger'
import ProductListItem from '../../component/product-list-item/ProductListItem'
import ItemSeparator from '../../component/item-separator/ItemSeparator'

const ProductList = observer(() => {
  const [loading, setLoading] = useState(true)
  const filterByEnabled = item => item.enabled
  const enabledItems = catalogStore.products.slice().filter(filterByEnabled)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts()
        if (data?.length) {
          catalogStore.setProducts(data)
        }
      } catch (e) {
        Logger.error(e)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const renderItem = ({ item }) => (
    <ProductListItem name={item.name} description={item.description} />
  )

  const keyExtractor = item => item.id.toString()

  if (loading) {
    return (
      <ScrollView>
        <ProductListItem loading />
        <ProductListItem loading />
      </ScrollView>
    )
  }

  return (
    <FlatList
      data={enabledItems}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  )
})

export default ProductList

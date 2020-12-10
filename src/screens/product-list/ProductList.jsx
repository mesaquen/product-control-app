import React, { useEffect } from 'react'
import {ScrollView, View, Text} from 'react-native'
import { observer } from 'mobx-react'
import catalogStore from '../../mobx/CatalogStore'
import { getProducts } from '../../logic/ProductSource'
import Logger from '../../utils/Logger'

const ProductList = observer(() => {
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
      }
    }

    fetchData()
  }, [])

  return (
    <ScrollView>
      {enabledItems.map(item => (
        <View key={item.id}>
          <Text>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  )
})

export default ProductList

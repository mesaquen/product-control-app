import React, { useEffect } from 'react'
import {ScrollView, View, Text} from 'react-native'
import { observer } from 'mobx-react'
import catalogStore from '../../mobx/CatalogStore'
import { getProducts } from '../../logic/ProductSource'
import Logger from '../../utils/Logger'

const ProductList = observer(() => {
  const items = catalogStore.products.slice()

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
      {items.map(item => (
        <View key={item.id}>
          <Text>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  )
})

export default ProductList

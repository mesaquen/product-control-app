import React from 'react'
import { Text } from 'react-native-paper'

const ProductForm = ({ route }) => {
  const { params } = route
  if (params?.id) {
    return <Text>Item {params.id}</Text>
  }

  return <Text>Form</Text>
}

export default ProductForm

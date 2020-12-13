import React, { useState, useEffect, useCallback, useReducer } from 'react'
import { observer } from 'mobx-react'
import { SafeAreaView, Text } from 'react-native'
import { Button, Colors, TextInput } from 'react-native-paper'
import Switch from '../../component/switch/Switch'
import styles from './ProductForm.styles'
import catalogStore from '../../mobx/CatalogStore'
import productStore from '../../mobx/ProductFormStore'

const BASE_PRODDUCT = { enabled: true, name: '', description: '' }

const ProductForm = observer(({ route, navigation }) => {
  const id = route?.params?.id
  const { enabled, name, description } = productStore
  const [saving, setSaving] = useState(false)

  const save = () => setSaving(true)

  useEffect(() => {
    const getProduct = id => {
      return catalogStore.products.find(item => item.id === id)
    }
    const catalogProduct = getProduct(id)
    const title = catalogProduct?.name ?? 'Novo produto'
    navigation.setOptions({
      title,
      headerRight: () => (
        <Button onPress={save} color={Colors.white}>
          Salvar
        </Button>
      )
    })

    const product = catalogProduct ?? BASE_PRODDUCT
    productStore.setName(product.name)
    productStore.setDescription(product.description)
    productStore.setEnabled(product.enabled)
  }, [])

  useEffect(() => {
    if (saving) {
      alert(JSON.stringify({enabled, name, description}))
      setTimeout(() => setSaving(false), 1000)
    }
  }, [saving])

  const handleToggleSwitch = value => {
    productStore.setEnabled(value)
  }

  const handleChangeName = value => {
    productStore.setName(value)
  }

  const handleChangeDescription = value => {
    productStore.setDescription(value)
  }

  return (
    <SafeAreaView style={styles.container}>
      {id ? (
        <Switch label='Ativo' value={!!enabled} onPress={handleToggleSwitch} />
      ) : null}

      <TextInput
        style={styles.input}
        value={name}
        label='Nome'
        mode='outlined'
        onChangeText={handleChangeName}
      />
      <TextInput
        style={styles.input}
        label='Descrição'
        value={description}
        numberOfLines={5}
        onChangeText={handleChangeDescription}
        mode='outlined'
        multiline
      />
    </SafeAreaView>
  )
})

export default ProductForm

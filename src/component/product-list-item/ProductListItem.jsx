import React from 'react'
import { View } from 'react-native'
import {
  ActivityIndicator,
  Title,
  Text,
  IconButton,
  Colors
} from 'react-native-paper'
import PropTypes from 'prop-types'
import styles from './ProductListItem.styles'

const ProductListItem = ({
  loading,
  name,
  description,
  onEdit,
  onRemove,
  ...props
}) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.titleSkeletor}></View>
          <View style={styles.descriptionSkeletor}></View>
        </View>
      </View>
    )
  }
  return (
    <View {...props} style={styles.container}>
      <View style={styles.infoContainer}>
        <Title style={styles.name}>{name}</Title>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {onEdit && (
          <IconButton
            style={styles.button}
            icon='pencil'
            color={Colors.grey700}
            onPress={onEdit}
          />
        )}
        {onRemove && (
          <IconButton
            style={styles.button}
            icon='delete'
            color={Colors.grey700}
            onPress={onEdit}
          />
        )}
      </View>
    </View>
  )
}

ProductListItem.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func
}

export default ProductListItem

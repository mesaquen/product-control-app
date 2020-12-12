import React from 'react'
import { View } from 'react-native'
import {
  Title,
  Text,
  IconButton,
  Colors
} from 'react-native-paper'
import PropTypes from 'prop-types'
import styles from './ProductListItem.styles'

const ProductListItem = ({
  loading,
  enabled,
  id,
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

const handleEdit = () => onEdit(id)
const handleRemove = () => onRemove(id)
 
  return (
    <View {...props} style={styles.container}>
      <View style={styles.infoContainer}>
        <Title style={enabled ? styles.name : styles.disabled}>{name}</Title>
        <Text style={enabled ? styles.description : styles.disabled}>{description}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {onEdit && (
          <IconButton
            style={styles.button}
            icon='pencil'
            color={Colors.grey700}
            onPress={handleEdit}
          />
        )}
        {onRemove && (
          <IconButton
            style={styles.button}
            icon='delete'
            color={Colors.grey700}
            onPress={handleRemove}
          />
        )}
      </View>
    </View>
  )
}

ProductListItem.propTypes = {
  id: PropTypes.number.isRequired,
  loading: PropTypes.bool,
  enabled: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func
}

ProductListItem.defaultProps = {
  enabled: true,
}

export default ProductListItem

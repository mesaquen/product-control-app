import React from 'react'
import { View } from 'react-native'
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons'
import { Title, Text, Button } from 'react-native-paper'
import PropTypes from 'prop-types'
import styles from './IconMessage.styles'
const IconMessage = ({ icon, title, subtitle, buttonLabel, onPress }) => {
  return (
    <View style={styles.container}>
      {icon && <Icon size={64} name={icon} />}
      {title && <Title>{title}</Title>}
      {subtitle && <Text>{subtitle}</Text>}
      {buttonLabel && <Button onPress={onPress}>{buttonLabel}</Button>}
    </View>
  )
}

IconMessage.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onPress: PropTypes.func
}

export default IconMessage

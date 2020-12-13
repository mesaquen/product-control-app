import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Switch as RNSwitch, Text } from 'react-native-paper'
import styles from './Switch.styles'

const Switch = ({ label, onPress , value}) => {
  const handlePress = () => {
    if (onPress) {
      onPress(!value)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNSwitch value={value} onValueChange={handlePress}/>
    </View>
  )
}

Switch.propTypes = {
    label: PropTypes.string,
    onPress: PropTypes.func,
    value: PropTypes.bool,
}

export default Switch 
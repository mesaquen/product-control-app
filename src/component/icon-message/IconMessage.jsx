import React from 'react'
import { View, Text, Button } from 'react-native'
import PropTypes from 'prop-types'

const IconMessage = ({ icon, title, subtitle, buttonLabel, onPress }) => {
  return (
    <View>
      <Text>{icon}</Text>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      <Button title={buttonLabel} onPress={onPress} />
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

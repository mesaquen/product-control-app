import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

const styles = StyleSheet.create({
  separator: {
    backgroundColor: Colors.grey300,
    height: 1,
    width: '100%'
  }
})
const ItemSeparator = () => <View style={styles.separator}></View>

export default ItemSeparator

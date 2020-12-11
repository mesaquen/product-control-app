import { StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  infoContainer: {
    flex: 1
  },
  buttonsContainer: {
    flex: 0,
    flexDirection: 'row'
  },
  titleSkeletor: {
      width: 200,
      height: 24,
      backgroundColor: Colors.grey400
  },

  descriptionSkeletor: {
    width: 100,
    height: 12,
    marginTop: 8,
    backgroundColor: Colors.grey400
},

  description: {
    color: Colors.grey500
  }
})

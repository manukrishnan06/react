import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Display from '../util/Display'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const BiologyCourseCards = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.flatListView}>
      <Image
          source={require('../screens/assets/images/teaching.jpg')}
          resizeMode="contain"
          style={styles.teaching}
          onPress={() => navigation.navigate('ClassVedio')}
        /> 
      <Text style={styles.txt} 
      onPress={() => navigation.navigate('ClassVedio')}
      >{title}</Text>
      <View style={styles.activeIconView}>
      <Icon name="radio-button-checked" size={12} color="gray" />
        <Text style={styles.activeIconText}> Chapter 1 </Text>
        <Icon name="radio-button-checked" size={12} color="gray" />
        <Text style={styles.activeIconText}> 3 Parts</Text>
        </View>
    </View>
  )
}

export default BiologyCourseCards

const styles = StyleSheet.create({
  flatListView:{
    height: Display.setHeight(32),
    width: Display.setWidth(80),
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    // padding: 20,
    elevation: 4,
    marginTop: 15
  },
  txt: {
    fontWeight: '500',
    color: 'black',
    fontSize: 17,
    marginLeft: 20
  },
  activeIconView:{
    flexDirection:'row',
    marginTop: 7,
    marginLeft: 20
  },
  activeIconText: {
    fontSize: 12,
    fontWeight: '500',
    marginRight: 15,
    marginTop: -2,
  },
  teaching:{
    height: '70%',
    width: '100%'
  }

})
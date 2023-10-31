import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native'
import React from 'react'
import General from './General'
import BiologyCards from './BiologyCards'
import Display from '../util/Display'
 import  Icon  from 'react-native-vector-icons/MaterialIcons'
 import { useNavigation } from '@react-navigation/native'

const Biology = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.backIconBorder}>
        <Icon name="keyboard-arrow-left" size={22} color="#4cbb17" />
        </View>

        <Text style={styles.txt}> Biology </Text>
        <View style={styles.activeIconView}>
        <Icon name="radio-button-checked" size={12} color="#4cbb17" />
        <Text style={styles.activeIconText}> 12 Chapters </Text>
        <Icon name="radio-button-checked" size={12} color="#4cbb17" />
        <Text style={styles.activeIconText}> 124 Hours </Text>

        </View>

        </View>
      <View style={styles.flatListView}>
        <FlatList 
        data={General.BIOLOGY_CONTENTS}
        keyExtractor={item => item.title}
        renderItem={({item}) => <BiologyCards {...item} />}
        />
      </View>
      
    </ScrollView>
  )
}

export default Biology

const styles = StyleSheet.create({
    container: {

    },
    subContainer: {
        backgroundColor:'#041e32',
        height: Display.setHeight(30),
        width: Display.setWidth(100),
        
    },
    backIconBorder: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        height: Display.setHeight(4),
        width: Display.setWidth(8),
        borderRadius: 3,
        left: 20,
        marginTop: 30

    },
    txt: {
      color: 'white',
      fontWeight: 'bold',
      left: 20,
      fontSize: 20,
      marginTop: 50
    },
    activeIconView:{
      flexDirection:'row',
      left: 20,
      marginTop: 10
    },
    activeIconText: {
      color: '#4cbb17',
      fontSize: 12,
      fontWeight: 'bold',
      marginLeft: 3,
      marginRight: 15,
      marginTop: -2,
    },
    flatListView:{
      alignItems: 'center',
    }
})
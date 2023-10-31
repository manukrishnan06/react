import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Display from '../util/Display';

const DrawerContent = () => {
  return (
    <View style= {styles.container}>
      <View style= {styles.marginView}>
      
      <View style= {styles.closingView}>
      <Icon name="close" size={16} color="#4cbb17"></Icon>
      </View>
      <View style={{marginTop: 30, marginBottom: 15}}>
      <View style={styles.flexView}>
      <Image
        source={require('../screens/assets/images/teacher1.jpg')}
        resizeMode="contain"
        style={styles.teacher}/>
        <Text style={styles.nameText}> Aaron Taylor </Text> 
        <Icon name="keyboard-arrow-right" size={22} color="#4cbb17"
        style={styles.rightIcon}></Icon>
        </View>
        <Text style={styles.IDext}> ID: 12345678 </Text> 
        </View>

        <View style={styles.flexView}>
        <View style={styles.squareView}></View>
        <Text style={styles.DrawerText}> Exam corner </Text> 
        </View>

        <View style={styles.borderView}></View>

        <View style={styles.flexView}>
        <View style={styles.squareView}></View>
        <Text style={styles.DrawerText}> Subscriptions </Text> 
        </View>

        <View style={styles.borderView}></View>

        <View style={styles.flexView}>
        <View style={styles.squareView}></View>
        <Text style={styles.DrawerText}> Analytics </Text> 
        </View>

        <View style={styles.borderView}></View>

        <View style={styles.flexView}>
        <View style={styles.squareView}></View>
        <Text style={styles.DrawerText}> Downloads </Text> 
        </View>

        <View style={styles.borderView}></View>

        <View style={styles.flexView}>
        <View style={styles.squareView}></View>
        <Text style={styles.DrawerText}> Notification </Text> 
        </View>

        <View style={styles.borderView}></View>

        <View style={styles.flexView}>
        <View style={styles.squareView}></View>
        <Text style={styles.DrawerText}> Referals </Text> 
        </View>

        <View style={styles.borderView}></View>

        <View style={styles.flexView}>
        <View style={styles.squareView}></View>
        <Text style={styles.DrawerText}> Subscriptions </Text> 
        </View>

        <View style={styles.borderView}></View>

        <View style={styles.flexView}>
        <View style={styles.squareView}></View>
        <Text style={styles.DrawerText}> Share app </Text> 
        </View>

        <View style={styles.borderView}></View>

        <View style={styles.flexView}>
        <View style={styles.squareVieww}></View>
        <Text style={styles.DrawerTextt}> Logout </Text> 
        </View>


        <View style={styles.enquireView}>
        <Text style={styles.enquireText}> Enquire now </Text> 
        </View>



      </View>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#041e32',
    height: '100%',
    width: '100%',
  },
  marginView: {
    marginTop: 30,
    marginLeft: 25
  },
  closingView: {
    height: 26,
    width: 27,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexView: {
    flexDirection: 'row',
  },
  teacher: {
    height: Display.setHeight(6),
    width: Display.setWidth(11),
    borderRadius: 180,
  },
  nameText: {
    color :'white',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 6
  },
  IDext: {
    fontSize : 10,
    fontWeight: 'bold',
    left: 52,
    top: -17,
    color:'gray'
  },
  rightIcon: {
    left: 60,
    bottom: -10
  },
  squareView: {
    height: 23,
    width: 24,
    borderColor: '#4cbb17',
    borderWidth: 1,
    borderRadius: 2,
  },
  DrawerText: {
    color: 'white',
    marginLeft: 13,
    marginTop: 2,
  },
  borderView: {
    height:1.1,
    width: 220,
    backgroundColor :'gray',
    marginTop: 12,
    marginBottom: 20
  },
  squareVieww: {
    height: 23,
    width: 24,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 2,
  },
  DrawerTextt: {
    color: 'red',
    marginLeft: 13,
    marginTop: 2,
    fontWeight: 'bold'
  },
  enquireView: {
    height: 50,
    width: '70%',
    borderColor: '#4cbb17',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    left: 25,
    marginTop: 33,
  },
  enquireText: {
    color:'#4cbb17',
    fontWeight: 'bold',

  }

})
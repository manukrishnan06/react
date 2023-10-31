import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRef} from 'react';
import Display from '../util/Display';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';


const StudemtDetails = () => {

  

  const navigation = useNavigation();

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const [focus, setFocus] = useState(false)
  const customStylen = focus ? styles.txtInputFocus : styles.txtInput

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <Image
        source={require('./assets/images/details.png')}
        resizeMode="contain"
        style={styles.icon}
      />


        <Text style={styles.mainText}>Student details</Text>

        <View style={styles.subContainer}>
          <View style={styles.inputContainer}>

          <View  style={styles.inputContainerView} >
            <TextInput   style={customStylen}
            placeholder='Full name'
            placeholderTextColor={ 'gray'}
            onFocus={() => setFocus(true) }
            
            />
          </View>

          <View  style={styles.inputContainerView} >
            <TextInput style = { styles.txtInput}
            placeholder='Email'
            placeholderTextColor={ 'gray'}
            onFocus={() => setFocus(false) }
            />
            
          </View>

          <View style={styles.inputContainerView} >
            <TextInput style = { styles.txtInput}
            placeholder='Select state'
            placeholderTextColor={ 'gray'}
            onFocus={() => setFocus(false) }/>
             <Icon name="keyboard-arrow-down" size={24} color="gray" 
             style={styles.dropIcon}/>
          </View>

          <View style={styles.inputContainerView} >
            <TextInput style = { styles.txtInput}
            placeholder='Pin code'
            placeholderTextColor={ 'gray'}
            onFocus={() => setFocus(false) }/>
          </View>

          <TouchableHighlight style={styles.btn}>
            <Text
              style={styles.btntxt}
              onPress={() => navigation.navigate('SchoolBoard')}>
              Register
            </Text>
          </TouchableHighlight>

          </View>
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    height: Display.setHeight(30),
    width: Display.setWidth(70),
    marginBottom :0
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop :10
  },
  subMainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -22,
  },
  inputContainer : {
    marginTop :30
  }, 
  inputContainerView : {
    height: Display.setHeight(7),
    width: Display.setWidth(85),
    borderWidth :1,
    borderRadius : 5,
    borderColor :'gray',
    backgroundColor: '#112434',
    marginBottom :7,
    flexDirection :'row',
    justifyContent : 'space-between',
    
  },

  subContainer: {
    height: Display.setHeight(56),
    width: Display.setWidth(100),
    backgroundColor: '#00202f',
    marginTop: 30,
    borderRadius: 15,
    alignItems: 'center',
  },
  btn: {
    borderWidth: 1,
    backgroundColor: 'green',
    height: Display.setHeight(8),
    width: Display.setWidth(83),
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  btntxt: {
    fontSize: 15,
    color: 'white',
    fontWeight : 'bold'
  },
  icon: {
    height: Display.setHeight(24),
    width: Display.setWidth(70),
  },
  txtInput: {
    color: 'white',
    paddingLeft :15,

  },
  txtInputFocus: {
    color: 'white',
    paddingLeft :15,
    borderColor : 'green',
    borderWidth :3,
    borderRadius : 5,
    height: Display.setHeight(7),
    width: Display.setWidth(85),
  },

  dropIcon : {
    marginRight :18,
    marginTop : 7
  }

});

export default StudemtDetails;
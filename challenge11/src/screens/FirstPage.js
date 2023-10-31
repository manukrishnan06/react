import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import { useState } from 'react';
import Display from '../util/Display';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const FirstPage = () => {
   const navigation = useNavigation();

   const [phoneNumber, setPhoneNumber] = useState ( "")
   const [countryCode, setCountryCode] = useState ("")

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.subMainContainer}>
        <Text style={styles.mainText}>Enter your mobile number</Text>
        <Text>We will send you a OTP to verify</Text>

        <View style={styles.subContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.country}>
              <TextInput style={styles.mobInputTxt}
                placeholder="+91"
                placeholderTextColor="white"
                onChangeText={(text) =>setCountryCode(text) }
              />
            </View>

            <View style={styles.mobile}>
              <TextInput style={styles.mobInputTxt}
                selectionColor="#FFFFFF"
                placeholder="Mobile number"
                placeholderTextColor="gray"
                keyboardType="numeric"
                maxLength={10}
                onChangeText={(text) =>setPhoneNumber(text) }
              />
            </View>
          </View>
          <TouchableHighlight style={styles.btn}>
            <Text
              style={styles.btntxt}
              onPress={() => navigation.navigate('VerifyPage' , {phoneNumber, countryCode})}>
              Continue
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
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  subMainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -140,
  },

  subContainer: {
    height: Display.setHeight(30),
    width: Display.setWidth(100),
    backgroundColor: '#00202f',
    marginTop: 30,
    borderRadius: 15,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  country: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 50,
    marginTop: 25,
    borderRadius: 7,
    paddingHorizontal: 6,
  },
  mobile: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 270,
    marginTop: 25,
    marginLeft: 7,
    borderRadius: 7,
    paddingHorizontal: 6,
  },
  btn: {
    borderWidth: 1,
    backgroundColor: 'green',
    height: Display.setHeight(8),
    width: Display.setWidth(83),
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  btntxt: {
    fontSize: 15,
    color: 'white',
    fontWeight : "bold"
  },
  mobInputTxt : {
    color :'white'
  }
});

export default FirstPage;

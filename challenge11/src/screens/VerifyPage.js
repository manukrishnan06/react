import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRef} from 'react';
import Display from '../util/Display';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';


const VerifyPage = ({

  route: {
    params: {phoneNumber},
    params: {countryCode},
  },
}) => {
  const defaultCountdown = 30;
  const [countdown, setCountdown] = useState(defaultCountdown);


  const decrementClock = () => {
    setCountdown(countdown - 1);
  };

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <Image
        source={require('./assets/images/otp.png')}
        resizeMode="contain"
        style={styles.icon}
      />

      <View style={styles.subMainContainer}>
        <Text style={styles.mainText}>Verification code</Text>
        <Text>please send the verification code send to</Text>
        <View style={styles.dataPass}>
          <Text style={styles.number}>{countryCode}</Text>
          <Text style={styles.number}>{phoneNumber}</Text>
        </View>

        <View style={styles.subContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.otp}>
              <TextInput
                style={styles.txtInput}
                placeholder=""
                placeholderTextColor="white"
                keyboardType="numeric"
                maxLength={1}
                ref={firstInput}
                onChangeText={text => {
                  text && secondInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otp}>
              <TextInput
                style={styles.txtInput}
                placeholder=""
                placeholderTextColor="white"
                keyboardType="numeric"
                maxLength={1}
                ref={secondInput}
                onChangeText={text => {
                  text
                    ? thirdInput.current.focus()
                    : firstInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otp}>
              <TextInput
                style={styles.txtInput}
                placeholder=""
                placeholderTextColor="white"
                keyboardType="numeric"
                maxLength={1}
                ref={thirdInput}
                onChangeText={text => {
                  text
                    ? fourthInput.current.focus()
                    : secondInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otp}>
              <TextInput
                style={styles.txtInput}
                placeholder=""
                placeholderTextColor="white"
                keyboardType="numeric"
                maxLength={1}
                ref={fourthInput}
                onChangeText={text => {
                  text
                    ? fifthInput.current.focus()
                    : thirdInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otp}>
              <TextInput
                style={styles.txtInput}
                placeholder=""
                placeholderTextColor="white"
                keyboardType="numeric"
                maxLength={1}
                ref={fifthInput}
                onChangeText={text => {
                  text
                    ? sixthInput.current.focus()
                    : fourthInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otp}>
              <TextInput
                style={styles.txtInput}
                placeholder=""
                placeholderTextColor="white"
                keyboardType="numeric"
                maxLength={1}
                ref={sixthInput}
                onChangeText={text => {
                  text
                    ? navigation.navigate('StudemtDetails')
                    : fifthInput.current.focus();
                }}
              />
            </View>
          </View>
          <TouchableHighlight style={styles.btn}>
            <Text
              style={styles.btntxt}
              onPress={() => navigation.navigate('StudemtDetails')}>
              Resend OTP
            </Text>
          </TouchableHighlight>
          <Text style={styles.resend}>Resend after ({countdown})</Text>

          <View style={styles.contact}>
          <Icon name="call" size={24} color="green" />
            <Text style={styles.contactText}>Contact Us</Text>
          </View>
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
    bottom: -22,
  },

  subContainer: {
    height: Display.setHeight(38),
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
  otp: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 50,
    marginTop: 25,
    marginLeft: 5,
    borderRadius: 7,
    paddingHorizontal: 6,
    backgroundColor: '#112434',
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
  icon: {
    height: Display.setHeight(30),
    width: Display.setWidth(70),
  },
  contactText: {
    color: 'green',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  txtInput: {
    color: 'white',
  },
  contact: {
    flexDirection: 'row',
    bottom: -10,
  },
  number: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginRight: 2,
  },
  dataPass: {
    flexDirection: 'row',
  },
  resend: {
    color: 'white',
    fontSize: 11,
    marginTop: 4,
  },
});

export default VerifyPage;

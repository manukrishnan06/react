import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Display from '../../util/Display';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profiles = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.flexView}>
          <Text style={styles.profileText}> Profile </Text>
          <Icon name="notifications-none" size={24} color="white"></Icon>

          <View
            style={styles.appsBorder}
            onPress={() => navigation.navigate('MyDrawer')}>
            <Image
              source={require('../assets/images/apps.png')}
              resizeMode="contain"
              style={styles.apps}
              onPress={() => navigation.navigate('MyDrawer')}
            />
          </View>
        </View>
      </View>

      
      <View style={styles.form}>
      <View style={styles.flexView}>
      <Image
        source={require('../assets/images/teacher1.jpg')}
        resizeMode="contain"
        style={styles.teacher}/>
        <Text style={styles.nameText}>Jane Doe</Text> 
        </View>
        <Text style={styles.IDext}> ID: 12345678 </Text> 
        <Text style={styles.perInfoText}> Personal Info </Text>

        <View  style={styles.borderView}></View>
        <View style={styles.flexView}>
        <Text style={styles.formText}> Account Settings </Text> 
        <Text style={styles.passedNameText}> Aaron Taylor </Text> 
        </View>
        <View  style={styles.borderView}></View>

        <View style={styles.flexView}>
        <Text style={styles.formText}> Email </Text> 
        <Text style={styles.emailText}> emailidid123@server.com </Text> 
        </View>

        <View  style={styles.borderView}></View>

        <View style={styles.flexView}>
        <Text style={styles.formText}> Number </Text> 
        <Text style={styles.number}> +91 9876543210 </Text> 
        </View>

        <View  style={styles.borderView}></View>

        <Text style={styles.courseInfoText}> Course Info </Text>

        <View  style={styles.borderView}></View>

        <View style={styles.flexView}>
        <Text style={styles.formText}> Center </Text> 
        <Text style={styles.number}> inmakes edu  </Text> 
        </View>

        <View  style={styles.borderView}></View>

        <View style={styles.flexView}>
        <Text style={styles.formText}> Course </Text> 
        <Text style={styles.number}> Plus Two Science </Text> 
        </View>

        <View  style={styles.borderView}></View>

        <View style={styles.flexView}>
        <Text style={styles.formText}> Payment Status </Text> 
        <Text style={styles.paymentStatus}> Freee </Text> 
        </View>

        <View  style={styles.borderView}></View>

        <View style={styles.flexView}>
        <Text style={styles.formText}> Expiry Date </Text> 
        <Text style={styles.expiryDate}> Not Applicable </Text> 
        </View>

      </View>

      <View style={styles.paymentView}>
      <View style={styles.flexView}>
        <View style={styles.paymentIconView}>
      <Icon name="payment" size={24} color="white"></Icon>
      </View>
      <Text style={styles.paymentText}> Custom Payment </Text> 
      <Icon name="keyboard-arrow-right" size={22} color="#4cbb17"
        style={styles.rightIcon}></Icon>
      </View>
      </View>

      
    </View>
  );
};

export default Profiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  profile: {
    backgroundColor: '#041e32',
    height: Display.setHeight(35),
    width: Display.setWidth(100),
    paddingTop: 40,
  },
  form: {
    position: 'absolute',
    backgroundColor: 'white',
    height: Display.setHeight(67),
    width: Display.setWidth(85),
    marginLeft: 30,
    top: 100,
    borderRadius: 5,
    padding: 10,
    elevation: 4

  },
  profileText: {
    color: 'white',
    marginLeft: 150,
    fontWeight: '500',
    fontSize: 19,
    marginRight: 80,
  },
  flexView: {
    flexDirection: 'row',
  },
  appsBorder: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5,
    height: Display.setHeight(5),
    width: Display.setWidth(9),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    top: -5
    
  },
  teacher: {
    height: Display.setHeight(6),
    width: Display.setWidth(11),
    borderRadius: 180,
    marginLeft: 10
  },
  nameText: {
    color :'black',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 6
  },
  IDext: {
    fontSize : 10,
    fontWeight: 'bold',
    left: 62,
    top: -17
  },
  perInfoText: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 6
  },
  borderView: {
    height: Display.setHeight(0.1),
    width: Display.setWidth(84),
    backgroundColor :'gray',
    left: -9,
    marginTop: 17
  },
  formText: {
    fontSize: 11,
    marginTop: 10,
  },
  passedNameText: {
    fontSize: 11,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20
  },
  emailText: {
    fontSize: 11,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 77
  },
  number: {
    fontSize: 11,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 67
  },
  courseInfoText: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 6,
  
  },
  paymentStatus: {
    fontSize: 11,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 23
  },
  expiryDate: {
    fontSize: 11,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 45
  },
  paymentView : {
    backgroundColor: '#41a317',
    height: Display.setHeight(9),
    width: Display.setWidth(85),
    left : 30,
    bottom: -340,
    borderRadius: 5,
    justifyContent: 'center'
  },
  paymentIconView: {
    height: Display.setHeight(5),
    width: Display.setWidth(10),
    backgroundColor: '#4cbb17',
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  paymentText: {
    color: 'white',
    marginLeft: 20,
    marginTop:10,
    fontWeight: 'bold',
    fontSize: 14
  },
  rightIcon: {
    color:'white',
    left: 120,
    top: 10
  }
  
});

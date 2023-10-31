import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Display from '../util/Display';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ClassVedio = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../screens/assets/images/teaching1.jpg')}
        resizeMode="contain"
        style={styles.teaching}
      />
      <View style={styles.marginView}>
        <View style={styles.flexView}>
          <View style={styles.forWidth}>
            <Text style={styles.titleTxt}> Long Chapter Name can be </Text>
            <Text style={styles.titleTxtt}> shown here </Text>
          </View>

          <View style={styles.downloadMargin}></View>
          <View style={styles.download}>
            <Icon
              name="file-download"
              size={22}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.dwnldTxt}>Download</Text>
          </View>
        </View>

        <View style={styles.flexViewtwo}>
          <Icon
            name="keyboard-arrow-left"
            size={22}
            color="gray"
            style={styles.PreviousIcon}
            
          />
          <Text style={styles.PreviousTxt}>Previous</Text>
          <Icon
            name="radio-button-checked"
            size={15}
            color="#4cbb17"
            style={styles.PreviousIcon}
          />
          <Text style={styles.activeTxt}>Part 1</Text>
          
          <Text style={styles.NextTxt}>Next</Text>
          <Icon
            name="keyboard-arrow-right"
            size={22}
            color="white"
          />
        </View>

        <View style={styles.flexViewthree}>
          <View style={styles.qestionTxtView}>
          <Text style={styles.qestionTxt}> Your sample question can be shown 
          here  no matter how long</Text>
          </View>
          <Image
        source={require('../screens/assets/images/teacher1.jpg')}
        resizeMode="contain"
        style={styles.teacher}
      />

        </View>

        <View style={styles.qestionInputBox}>
          <Text style={styles.askQestionTxt}> Ask a question? </Text>
          <View style={styles.postBtn}>
            <Text  style={styles.postTxt}>Post</Text>
          </View>
        </View>


        <View style={styles.chatWithTeachr}>
        <Image
        source={require('../screens/assets/images/whatsappLogo.png')}
        resizeMode="contain"
        style={styles.chatWithTeachrLogo}
      />
           <Text style={styles.chatWithTeachrTxt}>Chat with teacher</Text>
        </View>
         

      </View>
    </View>
  );
};

export default ClassVedio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#041e32',
    height: Display.setHeight(100),
    width: Display.setWidth(100),
    flex: 1,
  },
  marginView: {
    marginLeft: 20,
  },
  teaching: {
    height: '37%',
    width: '100%',
    top: -3,
  },
  flexView: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  titleTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  titleTxtt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  
  },
  dwnldTxt: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 34,
    marginBottom: 25
  },
  forWidth: {
    width: Display.setWidth(60),
  },
  download: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 33,
  },
  flexViewtwo: {
    alignItems: 'center',
    flexDirection: 'row',
    height: Display.setHeight(7),
    width: Display.setWidth(100),
    borderTopWidth: 1,
    borderTopColor: 'gray',
    left: -20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  PreviousTxt: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 11,
    marginRight: 55
  },
  PreviousIcon: {
    marginLeft: 25,
   
  },
  activeTxt: {
    color: '#4cbb17',
    fontWeight: 'bold',
    fontSize : 11,
    marginLeft: 5
  },
  NextTxt: {
    color :'white',
    marginLeft: 100,
    fontSize: 11,
    fontWeight: 'bold',
    marginRight: 5
  },
  downloadMargin: {
    height: Display.setHeight(6),
    width: Display.setWidth(0.2),
    backgroundColor: 'gray',
    right: -20
  },
  flexViewthree: {
    flexDirection:'row',
    height: Display.setHeight(8),
    width: Display.setWidth(90),
    backgroundColor: 'black',
    bottom: -126,
    borderRadius: 5,
    marginBottom: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qestionTxt: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 10
  },
  teacher: {
    height: Display.setHeight(5),
    width: Display.setWidth(9),
    borderRadius: 180,
    marginRight: 10
  },
  qestionTxtView: {
    height: Display.setHeight(8),
    width: Display.setWidth(70),
    marginTop: 20,
    left: -10
  },
  qestionInputBox: {
    flexDirection:'row',
    height: Display.setHeight(8),
    width: Display.setWidth(90),
    backgroundColor: '#112434',
    bottom: -126,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  askQestionTxt: {
    color: 'gray',
    left: -93,
    fontSize: 12
  },
  postBtn: {
    height: Display.setHeight(6),
    width: Display.setWidth(15),
    backgroundColor: 'white',
    borderRadius: 4,
    left: 94,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postTxt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14
  },
  chatWithTeachr: {
    flexDirection:'row',
    height: Display.setHeight(8),
    width: Display.setWidth(90),
    backgroundColor: '#041e32',
    bottom: -136,
    borderWidth: 1,
    borderColor: '#4cbb17',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatWithTeachrTxt: {
    color: '#4cbb17',
    marginLeft: 10,
    fontWeight: 'bold',
    fontWeight: 'bold'
  },
  chatWithTeachrLogo: {
    height: Display.setHeight(6),
    width: Display.setWidth(5),
  }

});
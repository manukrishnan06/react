import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Display from '../../util/Display';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';



const Homey = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.screenRightAlignmentView}>

      <View style={styles.subContainerDrawer}>
        <View style={styles.appsBorder}
         onPress={() => navigation.navigate('MyDrawer')}>
          
          <Image
            source={require('../assets/images/apps.png')}
            resizeMode="contain"
            style={styles.apps}
            onPress={() => navigation.navigate('MyDrawer')}
          />
        </View>

        <Image
          source={require('../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />

        <View style={styles.boxView}>
          <View style={styles.roundView}></View>
          <Text style={styles.ClassText}>Classes</Text>
        </View>
      </View>
     <Text style={styles.mrngText}> Goodmorning </Text>
     <Text style={styles.nameText}> Aoron Taylor </Text>
    
          <View style={styles.bluebgBackground}>
            <ImageBackground source={require('../assets/images/bluebg1.jpg')}
            resizeMode="contain"
            style={styles.bluebg}
            imageStyle={{borderRadius: 6}}>
              <View>
            <Text style={styles.bluebgText}> Class </Text>
            <Text style={styles.bluebgTextt}> Plus two science </Text>
            </View>
            <View>
            <Icon name="keyboard-arrow-down" size={20} color="white" 
             style={styles.dropIcon}/>
            </View>
            </ImageBackground>
            </View>
          

          <ScrollView horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          showsVerticalScrollIndicator = {false}
          style={styles.scrollViewStyle}>

          <View style={styles.boxVieww}>
          <View style={styles.roundVieww}></View>
          <Text style={styles.ClassText}
          onPress={() => navigation.navigate('Biology')}
          >Biology</Text>
          </View>
          <View style={styles.boxVieww}>
          <View style={styles.roundVieww}></View>
          <Text style={styles.ClassText}
          onPress={() => navigation.navigate('DrawerContent')}
          >Physics</Text>
          </View>
          <View style={styles.boxVieww}>
          <View style={styles.roundVieww}></View>
          <Text style={styles.ClassText}
           onPress={() => navigation.navigate('BiologyCards')}
          >Chemistry</Text>
          </View>
          <View style={styles.boxVieww}>
          <View style={styles.roundVieww}></View>
          <Text style={styles.ClassText}>Maths</Text>
          </View>

          </ScrollView>

          <Text style={styles.mrngText}> Recent courses </Text>

          <ScrollView  horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          showsVerticalScrollIndicator = {false}
          style={styles.scrollViewStyle}>

          <ImageBackground source={require('../assets/images/chemistry.jpg')}
            resizeMode="contain"
            style={styles.chemistry}
            imageStyle={{borderRadius: 6}}>
              <View style={styles.recentCoursesView}>
                
              <Icon name="play-circle-outline" size={24} color="white" 
             style={styles.playIcon}/>
             <Text style={styles.recentCoursesText}> Course Title </Text>
             </View >
             <View style={styles.ProgrssBarView}>
                  <View style={styles.ProgrssBar}></View>
                </View>

            </ImageBackground>

            <ImageBackground source={require('../assets/images/bloodcells.jpg')}
            resizeMode="contain"
            style={styles.chemistry}
            imageStyle={{borderRadius: 6}}>
               <View style={styles.recentCoursesView}>
              <Icon name="play-circle-outline" size={24} color="white" 
             style={styles.playIcon}/>
             <Text style={styles.recentCoursesText}> Course Title </Text>
             </View>
             <View style={styles.ProgrssBarView}>
                  <View style={styles.ProgrssBarw}></View>
                </View>
            </ImageBackground>


          </ScrollView>

          <ScrollView  horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          showsVerticalScrollIndicator = {false}
          style={styles.scrollViewStyle}>
             <ImageBackground source={require('../assets/images/dp.jpg')}
            resizeMode="contain"
            style={styles.dp}
            imageStyle={{borderRadius: 6}}>
            <Text style={styles.liveclassText}> Target live classes </Text>
            <Text style={styles.liveclassTextBest}> live classes by best </Text>
            </ImageBackground>
            
            <ImageBackground source={require('../assets/images/dp.jpg')}
            resizeMode="contain"
            style={styles.dp}
            imageStyle={{borderRadius: 6}}>
              <Text style={styles.liveclassText}> Target live classes </Text>
            <Text style={styles.liveclassTextBest}> live classes by best </Text>
            </ImageBackground>

          </ScrollView>


          </View>
    </View>
  );
};

export default Homey;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  screenRightAlignmentView: {
    right: -20
  },
  subContainerDrawer: {
    flexDirection: 'row',
  },
  logo: {
    height: Display.setHeight(10),
    width: Display.setWidth(40),
  },
  boxView: {
    flexDirection: 'row',
    height: Display.setHeight(5),
    width: Display.setWidth(20),
    borderColor: 'green',
    borderWidth: 2,
    marginTop: 15,
    borderRadius: 5,
    right: -50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ClassText: {
    color: '#00bb27',
    fontWeight: 'bold',
    fontSize: 12,
  },
  roundView: {
    height: Display.setHeight(2.5),
    width: Display.setWidth(4),
    backgroundColor: 'green',
    borderRadius: 180,
    marginRight: 5,
  },
  apps: {
    // height: Display.setHeight(9),
    // width: Display.setWidth(5),
  },
  appsBorder: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5,
    height: Display.setHeight(6),
    width: Display.setWidth(11),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginTop: 8,
  },
  mrngText: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginBottom: 5,
    fontSize: 12
  },
  nameText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize : 20
  },
  bluebg: {
    height: Display.setHeight(9),
    width: Display.setWidth(87),
    borderRadius: 10,
    marginTop : 30,
    marginLeft: 2,
    flexDirection:'row',
    justifyContent: 'space-between',
    borderRadius: 10
  },
  bluebgBackground: {
    borderRadius: 10,
    
  },
  bluebgText: {
    color: 'gray',
    fontSize: 11,
    marginLeft: 20,
    marginTop: 13
  },
  bluebgTextt: {
    color: 'white',
    fontSize: 13,
    marginLeft: 20
  },
  dropIcon : {
    marginRight :18,
    marginTop : 20
  },
  scrollViewStyle: {
    flexDirection: 'row',
    left: -40,
  },
  boxVieww: {
    flexDirection: 'row',
    height: Display.setHeight(5),
    width: Display.setWidth(20),
    borderColor: 'green',
    borderWidth: 2,
    marginTop: 15,
    borderRadius: 5,
    right: -50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
     
  },
  roundVieww: {
    height: Display.setHeight(2.5),
    width: Display.setWidth(4),
    backgroundColor: '#4cbb17',
    borderRadius: 180,
    marginRight: 5,
  },
  chemistry: {
    height: Display.setHeight(18),
    width: Display.setWidth(52),
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 10,
    left: 40
  },
  recentCoursesView: {
    flexDirection: 'row'
  },
  playIcon: {
    marginTop: 85,
    marginLeft: 10
  },
  recentCoursesText: {
    marginTop: 87,
    marginLeft: 6,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  },
  ProgrssBarView:{
    height: Display.setHeight(.4),
    width: Display.setWidth(48),
    backgroundColor: 'black',
    marginTop: 5,
    marginLeft: 10,
  },

  ProgrssBar:{
    height: Display.setHeight(.4),
    width: Display.setWidth(10),
    backgroundColor: 'blue',
  },
  ProgrssBarw:{
    height: Display.setHeight(.4),
    width: Display.setWidth(20),
    backgroundColor: 'blue',
  },
  dp: {
    height: Display.setHeight(29),
    width: Display.setWidth(62),
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 20,
    left: 40

  },
  liveclassText:{
    color: 'white',
    bottom: -135,
    fontWeight: 'bold',
    marginLeft: 40
  },
  liveclassTextBest: {
    color: 'gray',
    bottom: -135,
    fontWeight: 'bold',
    marginLeft: 40,
    fontSize: 12,
    marginTop: 5
  }
});

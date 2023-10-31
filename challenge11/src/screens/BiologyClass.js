import {StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import React from 'react';
import Display from '../util/Display';
import Icon from 'react-native-vector-icons/MaterialIcons';
import General from './General';
import BiologyCourseCards from './BiologyCourseCard';

const BiologyClass = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.flexView}>
          <View style={styles.backIconBorder}>
            <Icon name="keyboard-arrow-left" size={22} color="#4cbb17" />
          </View>

          <Text style={styles.biologyTxt}> Biology </Text>
        </View>
        <Text style={styles.titleTxt}> Long chapter name can be  </Text>
        <Text style={styles.titleTxt}> shown here </Text>

        <View style={styles.flexVieww}>
        <Icon name="radio-button-checked" size={12} color="#4cbb17" />
        <Text style={styles.activeIconText}> Chapter 1 </Text>
        <Icon name="radio-button-checked" size={12} color="#4cbb17" />
        <Text style={styles.activeIconText}> 3 Parts </Text>
        </View>

        <View style={styles.flexView}>
            <Text style={styles.tabText}> Videos </Text>
            <Text style={styles.tabTextt}> Chapter Test </Text>
            <Text  style={styles.tabTextt}> Resources </Text>
            <Text  style={styles.tabTextt}> QN Bank </Text>
        </View>
        <View style={styles.activeBarView}></View>

      </View>
      <View style={styles.flatListView}> 
        <FlatList 
        data={General.BIOLOGY_CONTENTS}
        keyExtractor={item => item.title}
        renderItem={({item}) => <BiologyCourseCards {...item} />}
        />
      </View>

    </ScrollView>
  );
};

export default BiologyClass;

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: '#041e32',
    height: Display.setHeight(35),
    width: Display.setWidth(100),
    paddingTop: 20,
  },
  backIconBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    height: Display.setHeight(4),
    width: Display.setWidth(8),
    borderRadius: 3,
    marginTop: 3,
  },
  biologyTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    left: 130,
  },
  flexView: {
    flexDirection: 'row',
    marginBottom: 30,
    left: 20
  },
  titleTxt: {
    color: 'white',
    left: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  activeIconText: {
    fontSize: 12,
    fontWeight: '500',
    marginRight: 15,
    marginTop: -2,
    color: '#4cbb17'
  },
  flexVieww: {
    flexDirection: 'row',
    marginBottom: 44,
    left: 23,
    marginTop: 10
  },
  tabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tabTextt: {
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: 20
  },
  flatListView:{
    alignItems: 'center',
  },
  activeBarView: {
    height: Display.setHeight(0.8),
    width: Display.setWidth(12),
    backgroundColor: '#4cbb17',
    top: -13,
    left: 23
  }
});

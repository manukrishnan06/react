import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Display from '../util/Display';
import {useNavigation} from '@react-navigation/native';

const AppDescription = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/AppDescription.jpg')}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.mainText}>Add your title</Text>
      <Text> The app tour description goes here </Text>

      <View style={styles.arrowViewBorder}>
        <View style={styles.arrowView}>
          <Icon
            name="arrow-forward"
            size={24}
            color="white"
            style={styles.arrowIcon}
            onPress={() => navigation.navigate('MyDrawer')}
          />
        </View>
      </View>
    </View>
  );
};

export default AppDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    height: Display.setHeight(70),
    width: Display.setWidth(90),
    borderRadius: 7,
    margin: 15,
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  arrowViewBorder: {
    borderWidth: 2,
    height: Display.setHeight(10),
    width: Display.setWidth(19),
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -50,
    borderRadius: 5,
    borderColor: 'gray',
    borderEndColor: 'green',
    borderTopColor: 'green',
  },
  arrowView: {
    height: Display.setHeight(8),
    width: Display.setWidth(15),
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});

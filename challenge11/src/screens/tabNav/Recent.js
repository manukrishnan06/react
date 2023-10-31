import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import React from 'react';

const Recent = () => {
  return (
    <View style={styles.container}>
      <Text>Recent</Text>
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

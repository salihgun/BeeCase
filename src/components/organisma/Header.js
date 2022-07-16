import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BackIcon} from '../atomic/BackIcon';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <BackIcon />
      </View>
      <Text style={styles.titleText}>Sıralama</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1.4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.4,
    elevation: 5,
    height: 100,
    paddingTop: 30,
  },
  iconContainer: {
    position: 'absolute',
    left: 20,
    top: 45,
  },
  titleText: {
    fontSize: 16,
    color: 'black',
  },
});

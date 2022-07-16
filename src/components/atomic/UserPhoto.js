import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Colors from '../../resources/constants/Colors';

export const UserPhoto = ({isUserFailed, url}) => {
  return (
    <View
      style={[
        styles.container,
        isUserFailed ? styles.noAwardContainer : styles.awardedContainer,
      ]}>
      <Image
        source={{
          uri: url,
        }}
        style={styles.image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
    width: 58,
    borderRadius: 99,
  },
  awardedContainer: {
    borderWidth: 3.5,
    borderStyle: 'dotted',
    borderColor: Colors.gold,
  },
  noAwardContainer: {
    backgroundColor: Colors.gray,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../resources/constants/Colors';

export const Score = ({failed, score}) => {
  return (
    <View
      style={[
        styles.container,
        failed ? styles.grayContainer : styles.goldContainer,
      ]}>
      <Text style={styles.scoreText}>{score}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 47,
    width: 40,
    height: 40,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goldContainer: {
    backgroundColor: Colors.gold,
  },
  grayContainer: {
    backgroundColor: Colors.gray,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

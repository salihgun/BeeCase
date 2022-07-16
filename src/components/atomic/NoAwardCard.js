import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../resources/constants/Colors';
import Layout from '../../resources/constants/Layout';
export const NoAwardCard = () => {
  return <View style={styles.container} />;
};
const styles = StyleSheet.create({
  container: {
    width: Layout.width * 0.86,
    height: Layout.width / 4.3,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
});

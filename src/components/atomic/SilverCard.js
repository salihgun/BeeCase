import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../resources/constants/Colors';
import Layout from '../../resources/constants/Layout';
import SilverAward from '../../resources/assets/Component 6 – 1.svg';

export const SilverCard = () => {
  return (
    <>
      <View style={styles.container} />
      <View style={styles.award}>
        <SilverAward width={40} height={40} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Layout.width * 0.86,
    height: Layout.width / 4.3,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  award: {
    position: 'absolute',
    right: 45,
  },
});

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../resources/constants/Colors';
import Layout from '../../resources/constants/Layout';
import GoldAward from '../../resources/assets/Component 5 – 1.svg';
export const GoldCard = () => {
  return (
    <>
      <View style={styles.container} />
      <View style={styles.award}>
        <GoldAward width={40} height={40} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Layout.width * 0.86,
    height: Layout.width / 4.3,
    backgroundColor: Colors.cream,
    borderRadius: 10,
  },
  award: {
    position: 'absolute',
    right: 45,
    top: 21,
  },
});

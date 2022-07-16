import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GoldMaskCard} from '../atomic/GoldMask';

export const GoldMaskComponent = () => {
  return (
    <View style={styles.container}>
      <GoldMaskCard />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});

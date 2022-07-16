import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SilverMaskCard} from '../atomic/SilverMask';

export const SilverMaskComponent = () => {
  return (
    <View style={styles.container}>
      <SilverMaskCard />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});

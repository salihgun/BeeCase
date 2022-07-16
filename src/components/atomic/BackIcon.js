import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from '../../resources/assets/Arrow-icon.svg';
export const BackIcon = () => {
  return (
    <Pressable style={styles.container}>
      <Icon width={20} height={20} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1.4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.4,
    elevation: 5,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

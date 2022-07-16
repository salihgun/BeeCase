import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const UserInfo = ({username, name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.usernameText}>{username}</Text>
      <Text style={styles.subText}>{name.toLowerCase()}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  usernameText: {
    color: 'black',
    fontSize: 15,
  },
  subText: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 15,
  },
});

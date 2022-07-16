import React from 'react';
import {View, StyleSheet} from 'react-native';
import {UserInfo} from '../atomic/UserInfo';
import {UserPhoto} from '../atomic/UserPhoto';

export const User = ({failed, user}) => {
  return (
    <View style={styles.container}>
      <UserPhoto isUserFailed={failed} url={user.item.picture.large} />
      <UserInfo
        username={user.item.login.username}
        name={user.item.name.first + user.item.name.last}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    left: 110,
  },
});

import React from 'react';
import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import {BronzeCard} from '../atomic/BronzeCard';
import {GoldCard} from '../atomic/GoldCard';
import {NoAwardCard} from '../atomic/NoAwardCard';
import {Score} from '../atomic/Score';
import {SilverCard} from '../atomic/SilverCard';
import {GoldMaskComponent} from '../molecules/GoldMaskComponent';
import {SilverMaskComponent} from '../molecules/SilverMaskCard';
import {User} from '../molecules/User';

export const UserListComponent = ({user}) => {
  const isGold = user.index === 0;
  const isSilver = user.index === 1;
  const isBronze = user.index === 2;
  const noAward = user.index > 2;

  const onClickUser = () => {
    Alert.alert('',
      `${user.item.name.first + ' ' + user.item.name.last}\n${
        user.item.login.username
      }\n${user.item.email}\n${user.item.location.street.name} ${
        user.item.location.street.number
      }\n${user.item.location.city} ${user.item.location.state} ${
        user.item.location.postcode
      }\n${user.item.location.timezone.offset}\n${
        user.item.location.timezone.description
      }`,
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onClickUser}>
      {isGold && <GoldCard />}
      {isSilver && <SilverCard />}
      {isBronze && <BronzeCard />}
      {noAward && <NoAwardCard />}
      {isGold && <GoldMaskComponent />}
      {(isSilver || isBronze) && <SilverMaskComponent />}
      <Score failed={noAward} score={user.index + 1} />
      <User failed={noAward} user={user} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1.4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.4,
    elevation: 5,
    marginVertical: 10,
  },
});

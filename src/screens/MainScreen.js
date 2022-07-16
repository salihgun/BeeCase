import React, {useEffect} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Header} from '../components/organisma/Header';
import {UserListComponent} from '../components/organisma/UserList';
import {
  loadMoreUser,
  getUsers,
} from '../infrastructure/redux/actions/UserActions';
import Layout from '../resources/constants/Layout';
export const MainScreen = () => {
  const {users, isRefreshing} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);
  const handleLoadMore = () => {
    if (users?.length < 100) {
      loadMoreUser(dispatch);
    }
  };
  return (
    <View>
      <Header />
      {Boolean(users.length) && (
        <FlatList
          data={users}
          renderItem={item => <UserListComponent user={item} />}
          keyExtractor={(item, index) => String(index)}
          contentContainerStyle={styles.flatlistContainer}
          refreshing={isRefreshing}
          onRefresh={() => getUsers(dispatch)}
          onEndReachedThreshold={0.1}
          onEndReached={handleLoadMore}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingBottom: Layout.width / 3,
  },
});

import axios from 'axios'
import {setIsRefreshing, setUsers, addUsers} from '../reducers/UserReducer'
import {batch} from 'react-redux'

export const getUsers = async dispatch => {
  dispatch(setIsRefreshing(true))
  const response = await axios.get('https://randomuser.me/api/?results=20')
  if (response.data) {
    batch(() => {
      dispatch(setUsers(response.data.results))
      dispatch(setIsRefreshing(false))
    })
  }
}

export const loadMoreUser = async dispatch => {
  const response = await axios.get('https://randomuser.me/api/?results=20')
  if (response.data) {
    dispatch(addUsers(response.data.results))
  }
}

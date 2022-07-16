import React from 'react';
import {MainScreen} from './src/screens/MainScreen';
import {Provider} from 'react-redux';
import {store} from './src/infrastructure/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;

import React from 'react';
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import Route from './src/misc/route';
const App = () => {
  return (
      <Provider store={store}>
        <Route />
      </Provider>   
  );
};
export default App;

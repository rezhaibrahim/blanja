import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// import Main from './src/screens/Main';
import Router from './src/router/router';
import store from './src/redux/store';

export default function App() {
 

  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

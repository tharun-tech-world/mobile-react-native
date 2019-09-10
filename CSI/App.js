import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native';

import Routes from './app/components/Routes'
import {Provider} from 'react-redux'
import store from './app/config/store'
import { PersistGate } from 'redux-persist/integration/react'

import persist from './app/config/store'
import Main from './app/Main'

const persistStore = persist();
class App extends Component {
  render() {
    return (
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
                <Main />
        </PersistGate>
      </Provider>
    )
  }
}

export default App

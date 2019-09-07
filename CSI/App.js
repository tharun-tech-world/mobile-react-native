import React, { Component } from 'react'


import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import LaunchScreen from './app/components/LaunchScreen/LaunchScreen';
import Routes from './app/components/Routes'



class App extends Component {
  render() {
    return (
  
        <Routes />
    
    )
  }
}

export default App

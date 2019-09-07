import React, { Component } from 'react'
import {BackHandler} from 'react-native'
import {Router, Stack, Scene, Actions} from 'react-native-router-flux'

import SignInScreen from './SignIn/SignInScreen'
import CreateAccountScreen from './CreatAccount/CreateAccountScreen'
import LaunchScreen from './LaunchScreen/LaunchScreen'


class Routes extends Component {

    componentDidMount () {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
      }
      componentWillUnmount() {
        this.backHandler.remove()
      }

      handleBackPress = () => {
        switch (Actions.currentScene) {
          case 'launch':
            BackHandler.exitApp()
            break
    
          default: Actions.pop()
        }
    
        return true
      }
    
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="launch" component={LaunchScreen}  />
                    <Scene key="signup" component={CreateAccountScreen} />
                    <Scene key="signin" component={SignInScreen} />
                </Stack>
             </Router>
        )
    }
}

export default Routes

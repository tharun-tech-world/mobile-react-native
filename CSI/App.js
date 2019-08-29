import React, { Component } from 'react'
import {Text, View, TextInput} from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/Fontisto'
import styles from './app/Styles/Style'
import Feed from './app/components/Feed'
import Profile from './app/components/Profile'
import Settings from './app/components/Settings'
import WelcomeScreen from './app/components/WelcomeScreen/WelcomeScreen'
import DashboardScreen from './app/components/DashboardScreen/DashboardScreen'
import LaunchScreen from './app/components/LaunchScreen/LaunchScreen'


import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

class App extends Component {
  render() {
    return <AppContainer />
  }
}

export default App


const DashboardTabNavigator = createBottomTabNavigator(
  {
    Feed,
    Profile,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerTitleStyle: { 
          
          textAlign: 'center',
          alignSelf:'center',
          flex:1,


      },
      }
    }
  }
);


const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="nav-icon-a"
            size={20}
          />
        ),
        headerRight: (
          <Icon
          style={{ paddingRight: 15 }}
          onPress={() => alert('Search button pressed')}
          name="search"
          size={20}
        />
        )
      }
    }   
  }
);


const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  //Launch: {screen:LaunchScreen},
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});


const AppContainer = createAppContainer(AppSwitchNavigator);

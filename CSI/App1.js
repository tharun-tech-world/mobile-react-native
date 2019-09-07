import React, { Component } from 'react'
import {Image} from "react-native";
import Icon from 'react-native-vector-icons/Fontisto'
import { Container, Content, Button, Header, Body } from 'native-base'

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  DrawerItems
} from 'react-navigation';

//Importing Components
import ChildEvents from './app/components/BottomDrawerScreens/ChildEvents'
import YouthEvents from './app/components/BottomDrawerScreens/YouthEvents'
import ElderEvents from './app/components/BottomDrawerScreens/ElderEvents'
import DashboardScreen from './app/components/DashboardScreen/DashboardScreen'
import LaunchScreen from './app/components/LaunchScreen/LaunchScreen'
import GalleryScreen from './app/components/DrawerScreens/GalleryScreen'
import SettingsScreen from './app/components/DrawerScreens/SettingsScreen';
import SignInScreen from './app/components/SignIn/SignInScreen';
import CreateAccountScreen from './app/components/CreatAccount/CreateAccountScreen';

import Routes from './app/components/Routes'




class App extends Component {
  render() {
    return <AppContainer />
  }
}

export default App


const TabNavigator = createBottomTabNavigator(
  {
    ChildEvents,
    YouthEvents,
    ElderEvents
  },
  {
    navigationOptions: ({ navigation }) => {

      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
          headerTitle: routeName,
          headerTitleStyle: { 
          textAlign: 'center',
          alignSelf:'center',
          fontWeight: 'bold',
          fontSize: 20,
          flex:1,
          color: '#03A9F4'
      },
    }
  },
      swipeEnabled:true,
      tabBarOptions: {
        activeTintColor: '#8A08A0',
        activeBackgroundColor: '#ECD46C',
        labelStyle: {
          fontSize: 15,
          fontWeight: 'bold', 
          alignContent: 'center',
          textAlign: 'center',
          padding: 10
        }
      }
    }
 
);


const StackNavigator = createStackNavigator(
  {
    TabNavigator: TabNavigator
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

//Custom Drawer Contents

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={ {height: 100, backgroundColor: 'white'}}>
      <Body>
        <Image
          style={{height: 65, width: 264}}
          source={require('./app/assets/DrawerIcon.jpg')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>
);

const DrawerNavigator = createDrawerNavigator({
 Home: StackNavigator,
 Gallery: GalleryScreen,
 Settings: SettingsScreen,

},{
    //initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
});

const SwitchNavigator = createSwitchNavigator({
  Launch: {screen:LaunchScreen},
  Dashboard: { screen: DrawerNavigator },
  SignIn: {screen: SignInScreen},
  CreateAccount: {screen: CreateAccountScreen}

  
});


const AppContainer = createAppContainer(SwitchNavigator);

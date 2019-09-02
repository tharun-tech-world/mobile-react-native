import React, { Component } from 'react'
import {Image} from "react-native";
import Icon from 'react-native-vector-icons/Fontisto'
import { Container, Content, Button, Header, Body } from 'native-base'



//Importing Components
import ChildEvents from './app/components/BottomDrawerScreens/ChildEvents'
import YouthEvents from './app/components/BottomDrawerScreens/YouthEvents'
import ElderEvents from './app/components/BottomDrawerScreens/ElderEvents'
import WelcomeScreen from './app/components/WelcomeScreen/WelcomeScreen'
import DashboardScreen from './app/components/DashboardScreen/DashboardScreen'
import LaunchScreen from './app/components/LaunchScreen/LaunchScreen'
import HomeScreen from './app/components/DrawerScreens/HomeScreen'
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  DrawerItems
  
} from 'react-navigation';

class App extends Component {
  render() {
    return <AppContainer />
  }
}

export default App


const DashboardTabNavigator = createBottomTabNavigator(
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
        activeBackgroundColor: '#F69F6D',
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

//Custom Drawer Contents

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={ {height: 70, backgroundColor: 'white'}}>
      <Body>
        <Image
          style={{height: 65,
            width: 264,
            }}
          source={require('./app/assets/DrawerLogo.jpg')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>
);

const AppDrawerNavigator = createDrawerNavigator({
 Home: DashboardStackNavigator,

},{
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
});

const AppSwitchNavigator = createSwitchNavigator({
  Launch: {screen:LaunchScreen},
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});


const AppContainer = createAppContainer(AppSwitchNavigator);

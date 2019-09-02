import React, { Component } from 'react'
import {Text, View, Button} from 'react-native'


class ChildEvents extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/* <Button title='Go to ChildEventsScreen' onPress= {()=> this.props.navigation.navigate('ChildEventsScreen')} /> */}
        <Text>Child Screen</Text>
        </View>
      );
    }
  }

  export default ChildEvents
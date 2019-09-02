import React, { Component } from 'react'
import {Text, View, Button} from 'react-native'


class ElderEvents extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/* <Button title='Go to ElderEventsScreen' onPress= {()=> this.props.navigation.navigate('ElderEventsScreen')} /> */}
          <Text>Elder Screen</Text>
        </View>
      );
    }
  }

  export default ElderEvents
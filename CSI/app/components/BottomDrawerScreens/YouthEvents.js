import React, { Component } from 'react'
import {Text, View, Button} from 'react-native'


class YouthEvents extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/* <Button title='Go to YouthEventsScreen' onPress= {()=> this.props.navigation.navigate('YouthEventsScreen')} /> */}
          <Text>Youth Screen</Text>
        </View>
      );
    }
  }

  export default YouthEvents
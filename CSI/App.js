import React, { Component } from 'react';
import { Text, View } from 'react-native';
class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome To CSI Church, Badvel</Text>
      </View>
    );
  }
}

export default HelloWorldApp
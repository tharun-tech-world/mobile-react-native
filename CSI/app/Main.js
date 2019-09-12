import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native';
import {Actions} from'react-native-router-flux'
import {connect} from 'react-redux'


import Routes from './components/Routes'


export class Main extends Component {
    render() {
        return (
                <View style={styles.container}>
                    <Routes />
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    }
  })

export default connect(null, null)(Main)
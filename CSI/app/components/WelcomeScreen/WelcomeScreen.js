import React, { Component } from 'react'
import {View} from 'react-native'
import Button from 'react-native-button'
import styles from '../../Styles/Style'

class WelcomeScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
          <View style={styles.view}>
            <Button
            style={styles.button}
              onPress={() => this.props.navigation.navigate('Dashboard')}>Login</Button>
  
          </View>
          <View style={styles.view}>
              <Button 
                style={styles.button}
                onPress={() => alert('button pressed')}>Sign Up</Button>
          </View>
          
        </View>
      );
    }
  }

  export default WelcomeScreen
import React, { Component } from 'react'
import {Text, View, TextInput} from 'react-native'
import Button from 'react-native-button'
import styles from '../../Styles/Style'

class LaunchScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
          <View style={styles.view}>
           <Text> Welcome to CSI Church,Badvel</Text>
           
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

  export default LaunchScreen
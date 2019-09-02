import React, { Component } from 'react'
import {Text, View, StyleSheet, Dimensions, ScrollView} from 'react-native'
import Button from 'react-native-button'
import Image from 'react-native-scalable-image';



class LaunchScreen extends Component {
    render() {
      return (
          <View style={styles.container}>
                  <View style={styles.view}>
                      <Text style={styles.text}> 
                          Welcome to CSI Church Badvel
                      </Text>
                  </View>
                  <View style={styles.view}>
                      <Image
                        width={Dimensions.get('window').width}// height will be calculated automatically
                        source={require('../../assets/welcomeimage.jpg')}
                      />
                  </View>
                  <View >
                      <Button 
                            style={styles.button}
                            onPress={() => alert('Create account button pressed')}>Create an account</Button>

                  </View>
                  <View>
                      <Button 
                            style={styles.button}
                            onPress={() => alert('Signin button pressed')}>Sign in</Button>

                  </View>

                  <View>
                      <Button 
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('Dashboard')}>View </Button>

                  </View>
            
          </View>
      );
    }
  }

  const styles = StyleSheet.create({

    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    text:{
      fontWeight: "bold",
      fontSize: 34,
      fontFamily: "Comic Sans MS",
      textAlign:"center"  
    },
    view: {
        width:"100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        borderRadius: 50,
        backgroundColor: "#19DACA",
        color:"white",
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "Comic Sans MS",
        textAlign:"center",
        marginTop:20,
        width: 350,
        height:50,
        padding: 10,
        
    }
   

  });
  export default LaunchScreen
import React, { Component } from 'react'
import {Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import Button from 'react-native-button'
import Image from 'react-native-scalable-image';
import {Actions} from 'react-native-router-flux'


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
                        source={require('../../assets/churchico.png')}
                      />
                  </View>
                  <TouchableOpacity style={styles.newbutton}
                  onPress={() => {Actions.signup()}}
                  
                  
                  >
                            <Text style={styles.buttontext}>create account</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.newbutton}
                   onPress={() => {Actions.signin()}}
                  >
                            <Text style={styles.buttontext}>Sign In</Text>
                  </TouchableOpacity>
                  {/* <View >
                      <Button 
                            style={styles.button}
                            //onPress={() => alert('Create account button pressed')}
                            onPress={() => this.props.navigation.navigate('CreateAccount')}
                          
                            
                            >Create an account</Button>

                  </View>
                  <View>
                      <Button 
                            style={styles.button}
                            //onPress={() => alert('Signin button pressed')}
                            //onPress={() => alert('Signin button pressed')}
                            onPress={() => this.props.navigation.navigate('SignIn')}
                            >Sign in</Button>

                  </View> */}

                  {/* <View>
                      <Button 
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('Dashboard')}>View </Button>

                  </View> */}
            
          </View>
      );
    }
  }

  const styles = StyleSheet.create({

    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#b0dfce'
      
    },
    text:{
      fontWeight: "bold",
      fontSize: 34,
      fontFamily: 'Volkhov-Bold',
      textAlign:"center", 
      color:'black',
  
    },
    view: {
        width:"100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        borderRadius: 50,
        backgroundColor: "#32862d",
        color:"white",
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "Comic Sans MS",
        textAlign:"center",
        marginTop:30,
        width: 300,
        height:50,
        padding: 10,
        
    },
    newbutton:{
      width:350,
      backgroundColor:'#073145',
      borderRadius:30,
      marginVertical:20,
      paddingVertical:15,
  },
  buttontext:{
      fontSize:16,
      fontWeight:'bold',
      color:'white',
      textAlign:'center'

  }
   

  });
  export default LaunchScreen
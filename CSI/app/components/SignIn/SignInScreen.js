import React, { Component } from 'react'
import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity} from 'react-native'
import Logo from '../WelcomeScreen/Logo';



class SignInScreen extends Component {
    render() {
        return (
            <View style={styles.container}>  
                    <Logo />    
                
                <Text style={{fontWeight:'bold', fontSize:30}}>Sign In</Text>

                    <TextInput style={styles.input}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Email"
                        placeholderTextColor="#ffffff"
                        
                        />

                    <TextInput style={styles.input}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        placeholderTextColor="#ffffff"
                        secureTextEntry={true}
                        />

                    <TouchableOpacity>
                        <Text style={{marginTop:10}}>Forogot password ?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttontext}>Sign In</Text>
                        </TouchableOpacity>
          
            </View>           
            
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#b0dfce',
        alignItems:'center',
       
        
    
    },
    input:{
        width:350,
        backgroundColor:'#79858b',
        borderRadius:25,
        paddingHorizontal:18,
        fontSize:16,
        color:'white',
        marginVertical:20
    },
    button:{
        width:350,
        backgroundColor:'#073145',
        borderRadius:25,
        marginVertical:30,
        paddingVertical:10,
    },
    buttontext:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
        textAlign:'center'

    }

})




export default SignInScreen

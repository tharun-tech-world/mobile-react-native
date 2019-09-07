import React, { Component } from 'react'
import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity,ScrollView} from 'react-native'
import Logo from '../WelcomeScreen/Logo';



class CreateAccountScreen extends Component {

    render() {
        
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                <Logo />      
                <Text style={{fontWeight:'bold', fontSize:30,marginVertical:30}}>Create account</Text>
                <View style={styles.container}> 
                    <TextInput style={styles.input}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Name"
                        placeholderTextColor="#ffffff"
                        
                        />
                    <TextInput style={styles.input}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Email"
                        placeholderTextColor="#ffffff"
                        
                        />
                    <TextInput style={styles.input}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Confirm Email"
                        placeholderTextColor="#ffffff"
                        
                        />

                    <TextInput style={styles.input}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        placeholderTextColor="#ffffff"
                        secureTextEntry={true}
                        />

                    <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttontext}>Creat account</Text>
                        </TouchableOpacity>

                </View>            
            </View>

                </ScrollView>
            </View>
            
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#b0dfce',
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        width:350,
        backgroundColor:'#79858b',
        borderRadius:25,
        paddingHorizontal:18,
        fontSize:16,
        color:'white',
        marginVertical:10
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




export default CreateAccountScreen

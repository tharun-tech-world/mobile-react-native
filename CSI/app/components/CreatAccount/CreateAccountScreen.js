import React, { Component } from 'react'
import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity,ScrollView} from 'react-native'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {compose} from 'redux'

import {Actions} from 'react-native-router-flux'

import Logo from '../WelcomeScreen/Logo';
import InputText from '../InputText'
import {createNewUser} from '../../actions/auth.actions'


class CreateAccountScreen extends Component {


    createNewUser = (values) =>{
        this.props.dispatch(createNewUser(values))
    }


    onSubmit = (values) => {
        this.createNewUser(values);
    }

    renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field
        return(

            <View>
                <InputText 
                    onChangeText = {onChange}
                    maxLength = {maxLength}
                    placeholder = {placeholder}
                    keyboardType = {keyboardType}
                    secureTextEntry = {secureTextEntry}
                    label = {label}
                    {...restInput} />
                    {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        )
    }

    render() {
        
        const {handleSubmit} = this.props;
        return (
            <View style={styles.container}>

                <Logo />
                <Field name="name"
                placeholder = "Name" 
                component= {this.renderTextInput}  />

                <Field name="email"
                placeholder = "Email" 
                component= {this.renderTextInput}  />

                <Field name="confirmemail"
                placeholder = "Confirm email" 
                component= {this.renderTextInput}  />

                <Field name="password"
                placeholder = "Password"
                secureTextEntry = {true}
                component= {this.renderTextInput}
               
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress = {handleSubmit(this.onSubmit)} 
                >
                            <Text style={styles.buttontext}>Creat account</Text>
                </TouchableOpacity>

                {/* <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
               
                
                <Field name="name"
                placeholder = "Name" 
                component= {this.renderTextInput}  />
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

                </ScrollView> */}
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

    },
    errorText:{
        color: '#ff0021',
        paddingHorizontal: 16,
        paddingBottom: 8,
        fontSize: 14,

    }

})

const validate = (values) => {
    const errors = {};

    if(!values.name){
        errors.name = "Name is required"
    }

    if(!values.email){
        errors.email = "Email is required"
    }

    if(!values.confirmemail){
        errors.confirmemail = "Confirm email is required"
    }

    if(!values.password){
        errors.password = "Password is required"
    }

    return errors;
}

mapDispatchToProps = (dispatch) => ({
    dispatch
})


export default compose(
    connect(null, mapDispatchToProps), 
    
    reduxForm({
        // a unique name for the form
        form: 'createaccount',
        validate
      })
)(CreateAccountScreen)

// export default connect(null, null)(
//     reduxForm({
//         // a unique name for the form
//         form: 'signup',
//         validate
//       })(CreateAccountScreen)
// )
   

// export default reduxForm({
//     // a unique name for the form
//     form: 'signup',
//     validate
//   })(CreateAccountScreen)
  
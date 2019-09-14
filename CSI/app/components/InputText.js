import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Text, TextInput, View, StyleSheet} from 'react-native'


const propTypes = {
    mapElement: PropTypes.func,
    onSubmitediting: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    maxLenghth: PropTypes.number,
    keyboardType: PropTypes.string,
    securityTextEntry: PropTypes.bool,
    label: PropTypes.string
};

const defaultProps = {
    mapElement:(n) => {},
    onSubmitediting: () => {},
    onChangeText: () => {},
    value: "",
    placeholder: "",
    maxLenghth: 200,
    keyboardType: "default",
    securityTextEntry: false,
    label: ""

}

const styles=StyleSheet.create({
    inputBox:{
        width: 350,
        backgroundColor: '#79858b',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color:'white',
        marginVertical:10,

    }
});

class InputText extends Component{

    state = {
        value: ""
    }

    componentDidMount(){
        this.setState({
            value: this.props.value
        })
    }

    onChangeText = (value) =>{
        this
        .setState({
            value
        }, () => {
            this.props.onChangeText(value)
        })
    }


    render(){
        //console.log(this.props.value)
        const {placeholder, securityTextEntry, keyboardType, maxLenghth, value, onChangeText, onSubmitEditing} = this.props;
        return(
            <View>
                <TextInput 
                        style = {styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder={placeholder}
                        placeholderTextColor="rgba(255,255,255,0.8)"
                        selectionColor = "#000000"
                        secureTextEntry ={securityTextEntry}
                        keyboardType = {keyboardType}
                        maxLength = {maxLenghth}
                        returnKeyType = "next"
                        value = {this.state.value}
                        onSubmitEditing = {onSubmitEditing}
                        onChangeText = {this.onChangeText}
                        
                />

            </View>
        )
    }
}

InputText.defaultProps = defaultProps;

InputText.propTypes = propTypes;

export default InputText;
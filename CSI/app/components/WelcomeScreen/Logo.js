import React, { Component } from 'react'
import {Text, View, StyleSheet,Image} from 'react-native'
class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                style={{height:200, width:200}}
                source={require('../../assets/CSIRoundIcon.png')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#b0dfce',
    
    }
})
export default Logo

import React, { Component } from 'react'
import {Platform, Dimensions, Text,View, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../Styles/Style';
import { Left } from 'native-base';


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

class MenuDrawer extends Component {

    navLink(nav,text){
        <TouchableOpacity  style={{height:50}} onPress ={()=> this.props.navigation.navigate(nav)}>
            <Text style={styles.links}>
                {text}
            </Text>
        </TouchableOpacity>

    }
    render() {
        return (
           <View style={styles.container}>
               <View style={styles.topLinks}> 
                <Text style={{padding: 40, color: 'white'}}>MenuDrawer</Text>
               </View>
               <View style={styles.bottomLinks}>
                   {this.navLink('Home', 'Home')}
                   {this.navLink('Links', 'Links')}
                   {this.navLink('Settings', 'Settings')}

               </View>
           </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: black
    },
    topLinks: {
        height:10,
        backgroundColor: 'balck'
    },
    bottomLinks:{
        flex:1,
        backgroundColor: 'white',
        padding: 10,
        paddingBottom: 400
    },
    links:{
        flex:1,
        fontSize:20,
        padding5,
        paddingLeft:15,
        margin:5,
        textAlign:'left'
    }
})
export default MenuDrawer

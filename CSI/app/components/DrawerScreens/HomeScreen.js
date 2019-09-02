import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button, Header, Left } from 'native-base'

class HomeScreen extends Component {

    //List Icon in drawer content
    static navigationOptions = ({ navigation }) => ({
        title: "Settings",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../../assets/Drawer.jpg')}
                style={[styles.icon]}
            />

    })
    

    render() {
        return (

            <Container>
                     <Header>
                <Left><Icon name="ios-menu" onPress={() => this.props.drawerOpen()} /></Left>

                
            </Header>
               
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Text>Settings Screen</Text>
                </Content>
            </Container>
        )
    }

}

export default HomeScreen

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24,
        borderRadius:50
    }
})
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button, Header, Left } from 'native-base'

class GalleryScreen extends Component {

    //List Icon in drawer content
    static navigationOptions = ({ navigation }) => ({
        title: "Gallery",
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
               
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Text>Gallery Screen</Text>
                </Content>
            </Container>
        )
    }

}

export default GalleryScreen

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24,
        borderRadius:50
    }
})
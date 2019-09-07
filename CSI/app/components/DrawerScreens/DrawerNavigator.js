import React from 'react'
import {Platform, Dimensions} from 'react-native'
import { createAppContainer,createDrawerNavigator} from 'react-navigation';

import GalleryScreen from './GalleryScreen'
import MenuDrawer from './MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const drawerConfig = {
    drawerwidth: WIDTH*0.83,
    contentComponent: ({navigation}) => {
        return(<MenuDrawer />)
    }
}

const DrawerNavigator = createDrawerNavigator({
    Home: GalleryScreen
},drawerConfig )


const Container = createAppContainer(DrawerNavigator);

export default Container
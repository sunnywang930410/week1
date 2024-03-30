import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Image source={{ uri: "https://raw.githubusercontent.com/sunnywang930410/starsimg/main/May.png" }} />
                <Text>May</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default CustomDrawer
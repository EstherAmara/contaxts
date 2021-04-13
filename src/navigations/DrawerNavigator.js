import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import routes from '../constants/routes';


function DrawerNavigator(props) {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name={routes.HOME} component={HomeNavigator}/>
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default DrawerNavigator;
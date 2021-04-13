import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavContainer = (props) => {
    const user = true;
    return (
        <NavigationContainer>
            { user ? <DrawerNavigator/> : <AuthNavigator /> }
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default AppNavContainer ;
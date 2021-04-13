import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/reducers/Providers';

const AppNavContainer = (props) => {
    const { authState: { isLoggedIn } } = useContext(GlobalContext);
    console.log('state is ', isLoggedIn);

    return (
        <NavigationContainer>
            { isLoggedIn ? <DrawerNavigator/> : <AuthNavigator /> }
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default AppNavContainer ;
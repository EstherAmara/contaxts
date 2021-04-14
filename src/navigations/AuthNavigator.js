import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import routes from '../constants/routes';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';

const AuthNavigator = (props) => {

    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name={routes.LOGIN} component={Login}/>
            <AuthStack.Screen name={routes.REGISTER} component={Register}/>
        </AuthStack.Navigator>
        // <Text> Hello </Text>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default AuthNavigator;
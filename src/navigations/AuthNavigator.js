import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import routes from '../constants/routes';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetail';

const AuthNavigator = (props) => {

    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={routes.LOGIN} component={Contacts}/>
            <AuthStack.Screen name={routes.REGISTER} component={ContactDetails}/>
        </AuthStack.Navigator>
        // <Text> Hello </Text>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default AuthNavigator;
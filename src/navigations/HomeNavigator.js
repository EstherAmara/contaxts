import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import routes from '../constants/routes';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';

const HomeNavigator = (props) => {

    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName={routes.CONTACT_LIST}>
            <HomeStack.Screen name={routes.CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={routes.CONTACT_DETAIL} component={ContactDetails}></HomeStack.Screen>
            <HomeStack.Screen name={routes.CREATE_CONTACT} component={CreateContact} />
            <HomeStack.Screen name={routes.SETTINGS} component={Settings} />
        </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default HomeNavigator;
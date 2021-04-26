import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import styles from './styles';

function Container({ children, style }) {
    return (
        <ScrollView style={[styles.container, style]}>
            <React.Fragment>{children}</React.Fragment>
        </ScrollView>
    );
}

export default Container;
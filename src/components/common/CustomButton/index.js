import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colours from '../../../assets/themes/colours';

function CustomButton({ disabled=false, loading=false, style, textStyle, title }) {
    return (
        <TouchableOpacity disabled={disabled} style={[style, (disabled ? {backgroundColor: colours.grey} : null)]}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={textStyle}>
                    { title }
                </Text>

                { loading && <ActivityIndicator color={colours.white} style={{paddingLeft: 10}} /> }
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default CustomButton;
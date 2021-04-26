import { useFormikContext } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import colours from '../../../assets/themes/colours';
import Container from '../Container';
import styles from './style'

const Input = ({ 
    error=null, 
    icon=null, 
    iconPosition='left', 
    label, 
    name,
    onChangeText, 
    style, 
    value,
    ...props }) => {

    const [focused, setFocused] = useState(false);
    const { setFieldValue, values } = useFormikContext();
    return (
        <View style={{marginVertical: 10}}>
            { label && <Text>{ label }</Text> }
            <View style={[styles.container, style, 
                {
                    flexDirection: iconPosition == 'left' ? 'row' : 'row-reverse',
                    borderColor: error ? colours.danger : ( focused ? colours.accent : colours.grey ),
                }
            ]}>
                { icon }
                <TextInput
                    onBlur={() => setFocused(false)}
                    onChangeText={text => setFieldValue(name, text)}
                    onFocus={ () => setFocused(true)}
                    value={values[name]}
                    style={{ flex: 1, width: '100%' }}
                    {...props}
                />
            </View>
            { error && <Text style={styles.error}>{ error }</Text> }
        </View>
    );
}

export default Input;
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import colours from '../../../assets/themes/colours';
import Container from '../../../components/common/Container';
import CustomButton from '../../../components/common/CustomButton';
import Input from '../../../components/common/Input';

function Login(props) {
    const [value, setValue] = useState('Useless password');
    return (
        <Container>
            <Input
                icon={<Text>X</Text>}
                label='Username'
                onChangeText={setValue}
                value={value}
            />

            <Input
                iconPosition='right'
                label='Password'
                onChangeText={setValue}
                value={value}
            />

            <CustomButton 
                style={{backgroundColor: colours.primary, padding: 10, borderRadius: 5}} 
                textStyle={{color: colours.white, fontSize: 15, textAlign: 'center'}} 
                title='Submit' 
            />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default Login;
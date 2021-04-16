import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import colours from '../../../assets/themes/colours';
import Container from '../../../components/common/Container';
import CustomButton from '../../../components/common/CustomButton';
import Input from '../../../components/common/Input';
import LoginComponent from '../../../components/Login';

function Login(props) {
    const [value, setValue] = useState('Useless password');
    return (
        <LoginComponent/>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default Login;
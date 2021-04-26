import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LoginComponent from '../../../components/Login';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from '../../../components/common/Input';
import CustomButton from '../../../components/common/CustomButton';
import colours from '../../../assets/themes/colours';
import Container from '../../../components/common/Container';
import styles from '../../../components/Login/styles';
import routes from '../../../constants/routes';
// import { Button, TextInput } from 'react-native';

const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
});

function Login(props) {
    const { navigate } = useNavigation();

    return (
        <Formik
            initialValues={{test: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            {({ errors, handleSubmit, setFieldValue, setFieldTouched, values}) => {
                return (
                    <>
                    <Container>
            
                        <Image source={require('../../../assets/images/logo.png')} style={styles.logoImage}/>
            
                        <View>
                            <Text style={styles.header}> Welcome to Contaxts </Text>
                            <Text style={styles.subheader }> Please login here </Text>
                            <Input
                                error={errors.username}
                                label='Username'
                                placeholder='Enter your username'
                                name='username'
                            />

                            <Input
                                error={errors.password}
                                icon={<Text>Show</Text>}
                                iconPosition='right'
                                label='Password'
                                name='password'
                                placeholder='Enter your password'
                                secureTextEntry={true}
                            />

                            <CustomButton
                                onPress={handleSubmit}
                                style={{backgroundColor: colours.primary, padding: 10, borderRadius: 5, marginTop: 10}} 
                                textStyle={{color: colours.white, fontSize: 15, textAlign: 'center'}} 
                                title='Submit' 
                            />
                        </View>

                        <View style={styles.registertext}>
                            <Text> Don't have an account ? </Text>
                            <TouchableOpacity onPress={() => navigate(routes.REGISTER)}>
                                <Text style={styles.registerlink}> Create one </Text>
                            </TouchableOpacity>
                        </View>
                    </Container>
                    </>
                )
            }}
        </Formik>
    );
}

export default Login;
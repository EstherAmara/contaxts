import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colours from '../../assets/themes/colours';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import routes from '../../constants/routes';
import styles from './styles';

function RegisterComponent({
    onSubmit,
    onChange,
    form,
    errors,
}) {
    const onstuff = (value) => {
        console.log(value);
    }
    return (
        <Container>

            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage}/>

            <View>
                <Text style={styles.header}> Welcome to Contaxts </Text>
                <Text style={styles.subheader }> Please register here </Text>

                <View>
                    <Input
                        label='Username'
                        placeholder='Enter  your username'
                        onChangeText={(value) => {
                            onChange({ name: 'userName', value});
                        }}
                        error={errors.userName}
                    />

                    <Input
                        label='First Name'
                        placeholder='Enter your First Name'
                        onChangeText={(value) => {
                            onChange({name: 'firstName', value})
                        }}
                        error={errors.firstName}
                    />

                    <Input
                        label='Last Name'
                        placeholder='Enter your Last Name'
                        onChangeText={(value) => {
                            onChange({name: 'lastName', value})
                        }}
                        error={errors.lastName}
                    />
    
                    <Input
                        label='Email'
                        placeholder='Enter your Email'
                        onChangeText={(value) => {
                            onChange({name: 'email', value})
                        }}
                        error={errors.email}
                    />
                    <Input
                        icon={<Text>Show</Text>}
                        iconPosition='right'
                        label='Password'
                        placeholder='Enter your password'
                        secureTextEntry={true}
                        onChangeText={(value) => {
                            onChange({name: 'password', value})
                        }}
                        error={errors.password}
                    />

                    <CustomButton
                        onPress={onSubmit}
                        style={{backgroundColor: colours.primary, padding: 10, borderRadius: 5, marginTop: 10}} 
                        textStyle={{color: colours.white, fontSize: 15, textAlign: 'center'}} 
                        title='Submit' 
                    />
                <View style={styles.registertext}>
                    <Text> Already have an account ? </Text>
                    <TouchableOpacity onPress={() => navigate(routes.LOGIN)}>
                        <Text style={styles.registerlink}> Login </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </Container>
    );
}

export default RegisterComponent;
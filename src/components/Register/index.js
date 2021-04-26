import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import env from '../../config/env';
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
    
    return (
        <Container>

            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage}/>

            <View>
                <Text style={styles.header}> Welcome to Contaxts </Text>
                <Text style={styles.subheader }> Please register here </Text>

                <View>
                    <Input
                        error={errors.username}
                        label='Username'
                        placeholder='Enter your username'
                        name='username'
                    />

                    <Input
                        error={errors.lastname}
                        label='Lastname'
                        placeholder='Enter your lastname'
                        name='lastname'
                    />
                    
                    <Input
                        error={errors.firstname}
                        label='Firstname'
                        placeholder='Enter your firstname'
                        name='firstname'
                    />

                    <Input
                        error={errors.email}
                        label='Email'
                        placeholder='Enter your email'
                        name='email'
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
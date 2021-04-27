import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    loading,
    error
}) {
    
    const { navigate } = useNavigation();
    return (
        <Container>

            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage}/>

            <View>
                <Text style={styles.header}> Welcome to Contaxts </Text>
                <Text style={styles.subheader }> Please register here </Text>

                <View>

                    {
                        error?.error &&
                        <Text> {error.error} </Text>
                    }

                    <Input
                        error={errors.username || error?.username?.[0]}
                        label='Username'
                        placeholder='Enter your username'
                        name='username'
                    />

                    <Input
                        error={errors.lastname || error?.last_name?.[0]}
                        label='Lastname'
                        placeholder='Enter your lastname'
                        name='lastname'
                    />
                    
                    <Input
                        error={errors.firstname || error?.first_name?.[0]}
                        label='Firstname'
                        placeholder='Enter your firstname'
                        name='firstname'
                    />

                    <Input
                        error={errors.email || error?.email?.[0]}
                        label='Email'
                        placeholder='Enter your email'
                        name='email'
                    />

                    <Input
                        error={errors.password || error?.password?.[0]}
                        icon={<Text>Show</Text>}
                        iconPosition='right'
                        label='Password'
                        name='password'
                        placeholder='Enter your password'
                        secureTextEntry={true}
                    />

                    <CustomButton
                        disabled={loading}
                        onPress={onSubmit}
                        loading={loading}
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
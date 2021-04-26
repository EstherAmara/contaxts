import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colours from '../../assets/themes/colours';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import routes from '../../constants/routes';

const LoginComponent = ({ errors, handleSubmit, values, setFieldTouched, setFieldValue }) => {
    const { navigate } = useNavigation();

    return (
        <Container>

            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage}/>

            <View>
                <Text style={styles.header}> Welcome to Contaxts </Text>
                <Text style={styles.subheader }> Please login here </Text>

                <View>
                    {/* <Input
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

                    <TextInput
                        // onBlur={() => setFieldTouched('username')}
                        onChangeText={text => setFieldValue('username', text)}
                        // value={values['username']}
                        style={{width: '100%', borderWidth: 1}}
                    />

                    <CustomButton
                        onPress={onSubmit}
                        style={{backgroundColor: colours.primary, padding: 10, borderRadius: 5, marginTop: 10}} 
                        textStyle={{color: colours.white, fontSize: 15, textAlign: 'center'}} 
                        title='Submit' 
                    /> */}

                    
                        <TextInput
                            style={{width: '100%', borderWidth: 1}}
                            onChangeText={(text) => setFieldValue('username', text)}
                        />
                        {errors.username && <Text> {errors.username}</Text>}

                        <TextInput
                            style={{width: '100%', borderWidth: 1, marginVertical: 15}}
                            onChangeText={(text) => setFieldValue('password', text)}
                        />
                        {errors.password && <Text> {errors.password} </Text>}

                        <Button onPress={handleSubmit} title='Submit' />
                </View>
                <View style={styles.registertext}>
                    <Text> Don't have an account ? </Text>
                    <TouchableOpacity onPress={() => navigate(routes.REGISTER)}>
                        <Text style={styles.registerlink}> Create one </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    );
}

export default LoginComponent;
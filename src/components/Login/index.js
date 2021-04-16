import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colours from '../../assets/themes/colours';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import routes from '../../constants/routes';

const LoginComponent = (props) => {
    const { navigate } = useNavigation();

    return (
        <Container>

            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage}/>

            <View>
                <Text style={styles.header}> Welcome to Contaxts </Text>
                <Text style={styles.subheader }> Please login here </Text>

                <View>
                    <Input
                        label='Username'
                        placeholder='Enter your username'
                    />

                    <Input
                        icon={<Text>Show</Text>}
                        iconPosition='right'
                        label='Password'
                        placeholder='Enter your password'
                        secureTextEntry={true}
                    />

                    <CustomButton
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
            </View>
        </Container>
    );
}

export default LoginComponent;
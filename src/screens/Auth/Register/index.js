import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import axiosInstance from '../../../helpers/axiosIntercepters';
import RegisterComponent from '../../../components/Register';
import register, { clearAuthState } from '../../../context/actions/auth/register';
import { GlobalContext } from '../../../context/reducers/Providers';
import routes from '../../../constants/routes';

const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().required().email(),
})
function Register(props) {
    const {authDispatch, authState:{error, loading, data}} = useContext(GlobalContext);
    const { navigate } = useNavigation();

    useEffect(() => {
        if(data) {
            navigate(routes.LOGIN);
        }
    }, [data]);


    useFocusEffect(
        useCallback(() => {
            if (data || error) {
                clearAuthState()(authDispatch);
            }
        }, [data, error]),
    );

    const submitThis = (values) => {
        const reg = register(values)(authDispatch);
        console.log(reg);
    }
    return (
        <Formik
            initialValues={{username: '', password: '', firstname: '', lastname: '', email: ''}}
            validationSchema={validationSchema}
            onSubmit={submitThis}
        >
            {({ handleSubmit, errors, }) => {
                return (
                    <RegisterComponent 
                        onSubmit={handleSubmit} 
                        errors={errors}
                        error = {error}
                        loading = {loading}
                    />
                )
            }}
        </Formik>
    );
}


export default Register;
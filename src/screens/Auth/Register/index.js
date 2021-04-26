import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RegisterComponent from '../../../components/Register';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().required().email(),
})
function Register(props) {

    return (
        <Formik
            initialValues={{username: '', password: '', firstname: '', lastname: '', email: ''}}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
        >
            {({ handleSubmit, errors, }) => {
                return (
                    <RegisterComponent 
                        onSubmit={handleSubmit} 
                        errors={errors}
                    />
                )
            }}
        </Formik>
    );
}


export default Register;
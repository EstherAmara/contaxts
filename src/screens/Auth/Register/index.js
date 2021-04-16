import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RegisterComponent from '../../../components/Register';

function Register(props) {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const onChange = ({ name, value }) => {
        console.log(name, value);
        console.log(form);
        setForm({[name]: value});
    }

    const onSubmit = () => {
        if(!form.userName) {
            setErrors((prev) => {
                return { ...prev, userName: 'Please add a username'}
            });
        }
        if(!form.firstName) {
            setErrors((prev) => {
                return { ...prev, firstName: 'Please add a firstname'}
            });
        }
        if(!form.lastName) {
            setErrors((prev) => {
                return { ...prev, lastName: 'Please add a lastname'}
            });
        }
        if(!form.email) {
            setErrors((prev) => {
                return { ...prev, email: 'Please add a email'}
            });
        }
        if(!form.password) {
            setErrors((prev) => {
                return { ...prev, password: 'Please add a password'}
            });
        }
        console.log('form is ', form);
    };

    return (
        <RegisterComponent 
            onSubmit={onSubmit} 
            onChange={onChange} 
            form={form} 
            errors={errors}
        />
    );
}


export default Register;
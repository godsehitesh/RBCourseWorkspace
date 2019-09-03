import React, { useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const PasswordScreen = () => {
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter your password:</Text>
            <TextInput 
                value = {password}
                onChangeText = {
                    (newValue) => {setPassword(newValue);} 
                    }/>
            {password.length<6 ? 
            <Text>Password should be at least 5 characters long</Text>:
            null}
        </View>

    );

}

const styles = StyleSheet.create({});

export default PasswordScreen;
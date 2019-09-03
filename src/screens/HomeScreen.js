import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';


const HomeScreen = props => {

    return (<View> 
    <Text style = {styles.textStyle}>List Screen</Text>
    <Button 
    onPress = {() => props.navigation.navigate('Components')}
    title = "Go to components screen"/>
    <Button 
    onPress = {() => props.navigation.navigate('List')}
    title = "Go to lists screen"/>
    <Button 
    onPress = {() => props.navigation.navigate('ImageScr')}
    title = "Go to images screen"/>
    <Button 
    onPress = {() => props.navigation.navigate('Counter')}
    title = "Go to the counter screen"/>
    <Button 
    onPress = {() => props.navigation.navigate('Colors')}
    title = "Go to the colors screen"/>
    <Button 
    onPress = {() => props.navigation.navigate('Square')}
    title = "Go to the square screen"/>
    <Button 
    onPress = {() => props.navigation.navigate('Password')}
    title = "Go to the password screen"/>
    </View>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});

export default HomeScreen;
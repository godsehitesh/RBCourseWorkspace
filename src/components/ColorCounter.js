import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';


const ColorCounter = () => {

    return( 
    <View>
    <Text>Red</Text>
    <Button title = "Increase red" />
    <Button title = "Decrease red" />    
    </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;
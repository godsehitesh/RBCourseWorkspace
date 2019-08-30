import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {

    switch(action.type){
        case 'change':
            return {...state, count : state.count + action.payload};

        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const {count} = state;

    return (
        <View>
            <Button 
            title = 'Increment'
            onPress = {() => dispatch({type: 'change', payload: 1})}
            />
            <Button 
                title = 'Decrement'
                onPress = {() =>  dispatch({type: 'change', payload: -1})}
            />
            <Text>Your count value: {count}</Text>
        </View>
    );

};

const styles = StyleSheet.create({});

export default CounterScreen;
import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 40},
        {name: 'Friend #2', age: 35},
        {name: 'Friend #3', age: 42},
        {name: 'Friend #4', age: 25},
        {name: 'Friend #5', age: 40},
        {name: 'Friend #6', age: 29},
        {name: 'Friend #7', age: 78},
        {name: 'Friend #8', age: 9},
        {name: 'Friend #9', age: 21},
    ];


    return (<FlatList
                keyExtractor = {friend=> friend.name}
                data = {friends}
                renderItem = {({item}) => {
                    return <Text style = {styles.textStyle}>{item.name} Age- {item.age}</Text>
                }
                } 
        />);
};

const styles = StyleSheet.create(
    {
        textStyle: {
            marginVertical: 50
        }
    });

export default ListScreen;
import React from 'react';
import {  Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, onDelete }) {

    const pressHandler = () => {
        onDelete(item.key);
    }
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.item}>{item.text}</Text>
            <Button title='Del'color='red' onPress={pressHandler} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
        color: '#3E434D',
        fontSize: 17,
        margin: 2
    }
});

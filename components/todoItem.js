import React from 'react';
import {  Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, onDelete }) {

    const pressHandler = () => {
        onDelete(item.key);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{item.text}</Text>
            <TouchableOpacity onPress={pressHandler}>
                <View>
                    <MaterialIcons name='delete' size={18} color='red'/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        color: '#3E434D',
        fontSize: 17,
        margin: 2
    }
});

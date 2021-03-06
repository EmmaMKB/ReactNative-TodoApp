import React, { useState } from 'react';
import {  Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function TodoForm({ onSubmit }){
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    const handlePress = () => {
        if (text.length < 3) {
            Alert.alert("Error", 'Todo text is too short', [
                {text: 'understood'}
            ]);
        }
        else{
            onSubmit(text);
            setText('');
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>New todo</Text>
            <TextInput
                style={styles.input}
                placeholder='New todo...'
                onChangeText={changeHandler}
                value={text}
             />
             <Button
                title='Add'
                onPress={handlePress}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    input: {
       borderColor: '#cccccc',
       borderWidth: 1,
       height: 40,
       borderRadius: 4,
       paddingStart: 10,
       marginBottom: 5
    },
    title:{
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 5
    },
   });
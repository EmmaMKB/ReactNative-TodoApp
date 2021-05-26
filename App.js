import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import TodoForm from './components/todoForm';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Make an app', key: '1'},
    { text: 'Download Corel Draw', key: '2'}
  ])

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos 
      ]
    })
  }

  const deleteHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback
      onPress={dismissKeyboard}
    >
      <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View>
          <TodoForm onSubmit={submitHandler} />
        </View>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} onDelete={deleteHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingTop: 60
  },
 content: {

 },
 list: {
   backgroundColor:'#fff',
   marginStart: 15,
   marginEnd: 15,
   padding: 10,
   borderRadius: 5,
 },
});

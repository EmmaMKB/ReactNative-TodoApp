import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';

export default function Header() {
  
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4BA2E8',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10
  },
 title: {
    fontSize: 34,
    fontWeight: "bold",
    color: '#fff'
 },
});

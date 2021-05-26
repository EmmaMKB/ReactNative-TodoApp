import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';

export default function Topbar() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text style={styles.title}>Icon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
});

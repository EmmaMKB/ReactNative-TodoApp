import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Topbar() {
  
  return (
    <View style={styles.container}>
        <View>
            <Ionicons name="menu-outline" size={24} color="#333" />
        </View>
        <View>
            <FontAwesome name='user-circle' size={24} color='#333' />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 10,
      paddingBottom: 10
  },
});

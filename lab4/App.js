import React from 'react';
import { StyleSheet, View } from 'react-native';

import Ex1 from './Ex1'
import Ex2 from './Ex2'

export default function App() {
  return (
    <View style={styles.container}>
      <Ex2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

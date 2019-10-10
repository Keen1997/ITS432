import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Stocks from './components/Stocks03'

export default function App() {
  return (
    <View style={styles.container}>
      <Stocks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

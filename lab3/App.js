import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Ex1 from './Ex1'
import Ex2 from './Ex2'
import Ex3 from './Ex3'
import Test from './Test'
import Test2 from './Test2'
import Test3 from './Test3'

export default function App() {
  return (
    <View style={styles.container}>
      {<Test2 a="X" b="Tun" c="Kon"/>}
      {/* {<Test3 />} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

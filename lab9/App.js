import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import LoginScreen from './LoginScreen';

let firebaseConfig = {
  apiKey: "AIzaSyBtcWF_-6oqeZrsNHkkjU7HMdKsD-nHTEw",
  authDomain: "mobile-lab8.firebaseapp.com",
  databaseURL: "https://mobile-lab8.firebaseio.com",
  projectId: "mobile-lab8",
  storageBucket: "",
  messagingSenderId: "53158035011",
  appId: "1:53158035011:web:fab28773a1c58a39e89ef6",
  measurementId: "G-MDHR1VDQR1"
};
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

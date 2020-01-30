import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Emitter from "./components/componentA";
import Receiver from './components/componentB';
export default function App() {
  return (
    <View style={styles.container}>
      <Emitter />
      <Receiver />
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

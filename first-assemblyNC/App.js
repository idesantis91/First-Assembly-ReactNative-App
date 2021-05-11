import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Components
import Header from './components/Header';
import HomeSection from './components/HomeSection';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello World!</Text> */}
      {/* <Header/> */}
      <HomeSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

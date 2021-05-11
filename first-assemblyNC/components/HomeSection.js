import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeSection = () =>{

    return(
        <View style={styles.container}>
            <LinearGradient
            colors={['#414345','#232526']}
            style={styles.background}
            >


            </LinearGradient>
            <Text>This is the Home Page</Text>
        </View>
    )
}

//Style 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
  });
export default HomeSection;
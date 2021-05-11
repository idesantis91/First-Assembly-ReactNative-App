import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeSection = () =>{

    return(
        <View style={styles.container}>
            <LinearGradient
            colors={['#414345','#232526']}
            style={styles.background}
            >
            <View style={styles.header} contentContainerStyle={{ flexDirection: 'row'}}>
                 <Image source={require('../assets/Logo.png')} style={{
                 resizeMode: "contain",
                 alignItems: 'flex-start',
                 height: 50,
                 width: 50
                 }}/>
                 <Text style={styles.headerText}>First Assembly of God - NC</Text>
            </View>
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
      header:{
        //   backgroundColor: '#282828',
        //   height: 60,
          width: '100%',
          paddingTop: 60,
          position:'absolute',
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 40,
          justifyContent: 'space-between',
          alignItems: 'center'
      },

      headerText: {
          fontSize: 20,
          color: 'white',
      }
  });
export default HomeSection;
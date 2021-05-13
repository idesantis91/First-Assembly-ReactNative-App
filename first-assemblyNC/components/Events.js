import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Lobster_400Regular
} from '@expo-google-fonts/dev';

const Events = () =>{
    let [fontsLoaded] = useFonts({
        Lobster_400Regular
    });

    return(
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
                 <Text style={styles.headerText}>Events</Text>
            </View>
            <View style={styles.container}>
            <View style={styles.content}>
                <Text>Welcome</Text>
            </View>
        </View>
        </LinearGradient>
    )
}

//Style 
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
          height: 100,
          width: '100%',
          paddingTop: 40,
          position:'relative',
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 170,
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
      },

      headerText: {
          fontSize: 20,
          fontFamily: 'Lobster_400Regular',
          color: 'white',
      },

      content: {
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center'
      }
  });
export default Events;
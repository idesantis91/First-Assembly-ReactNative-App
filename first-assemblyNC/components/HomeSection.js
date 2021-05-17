import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-elements';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Lobster_400Regular
} from '@expo-google-fonts/dev';

const HomeSection = () =>{
    let [fontsLoaded] = useFonts({
        Lobster_400Regular
    });

    return(
        <LinearGradient
            colors={['#000000','#000000']}
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
                 <ScrollView>
                    <Card containerStyle={styles.container}>
                        <Card.Title style={styles.cardTitle}>Verse of the Day</Card.Title>
                        <Card.Divider style={{width:200, marginLeft:60}}/>
                    </Card>
                 </ScrollView>
        </LinearGradient>
    )
}

//Style 
const styles = StyleSheet.create({
    container: {
        marginTop:50,
        backgroundColor:'#1B1B1B',
        borderColor: '#1B1B1B',
        borderRadius: 20,
        height:200
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
          paddingRight: 70,
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
      },

      cardTitle:{
        fontSize: 20, 
        color:'white'
      },
  });
export default HomeSection;
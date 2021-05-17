import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
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
            {/* <View style={styles.container}> */}
            {/* <View style={styles.content}> */}
            <ScrollView>
            <Card containerStyle={{marginTop: 20, borderColor:'#27648A', borderWidth: 5}}>
                <Card.Title style={{fontSize: 20}}>VolleyBall</Card.Title>
                <Card.Divider/>
                <Card.Image source={require('../assets/VolleyBall.jpeg')}>
            </Card.Image>
            <Text style={{marginBottom: .5, paddingTop: 10, fontSize: 15}}>
                Join us for Volleyball on Tuesdays at 7:00pm!
            </Text>
            </Card>
            <Card containerStyle={{marginTop: 20, borderColor:'#27648A', borderWidth: 5}}>
                <Card.Title style={{fontSize: 20}}>Tech Team</Card.Title>
                <Card.Divider/>
                <Card.Image source={require('../assets/Keyboard.jpeg')}>
            </Card.Image>
            <Text style={{marginBottom: .5, paddingTop: 10, fontSize: 15}}>
                 Interested in Tech? Join the Tech Team and attend the training
                Sunday, May 23rd. 
            </Text>
            </Card>
            </ScrollView>
    {/* </View> */}
        {/* </View> */}
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
        //  backgroundColor: '#282828',
          height: 100,
          width: '100%',
          paddingTop: 40,
          position:'relative',
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 164,
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'center',
          elevation: 2,
      },

      headerText: {
          fontSize: 20,
          fontFamily: 'Lobster_400Regular',
          color: 'white',
          textAlign: 'center'
      },

      content: {
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center'
      }
  });
export default Events;
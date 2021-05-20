import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import {
    useFonts,
    Lobster_400Regular
} from '@expo-google-fonts/lobster';

const Events = () =>{
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
                 <Text style={styles.headerText}>Events</Text>
            </View>
            <ScrollView style={styles.scrollView} 
                        contentContainerStyle={styles.contentContainer}>
            <Card containerStyle={styles.card}>
                <Card.Title style={styles.cardTitle}>VolleyBall</Card.Title>
                <Card.Divider/>
                <Card.Image source={require('../assets/VolleyBall.jpeg')}>
            </Card.Image>
            <Text style={styles.cardText}>
                Join us for Volleyball on Tuesdays at 7:00pm!
            </Text>
            </Card>
            <Card containerStyle={styles.card}>
                <Card.Title style={styles.cardTitle}>Tech Team</Card.Title>
                <Card.Divider/>
                <Card.Image source={require('../assets/Keyboard.jpeg')}>
            </Card.Image>
            <Text style={styles.cardText}>
                 Interested in Tech? Join the Tech Team and attend the training
                Sunday, May 23rd. 
            </Text>
            </Card>
            <Card containerStyle={styles.card}>
                <Card.Title style={styles.cardTitle}>Ladies Bible Study and Prayer</Card.Title>
                <Card.Divider/>
                <Card.Image source={require('../assets/prayer.jpeg')}>
            </Card.Image>
            <Text style={styles.cardText}>
                 Ladies come out for Bible Study and Prayer every Tuesday at 10:30am - 12pm
            </Text>
            </Card>
            </ScrollView>
        </LinearGradient>
    )
}

//Style 
const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    alignSelf: 'center',
    // padding: 20,
    // backgroundColor:'blue',
    borderColor: 'black',
  },
  contentContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingBottom: 100,
    // backgroundColor:'white'
  },
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
      },

      card:{
        marginTop: 20, 
        borderColor:'#1B1B1B', 
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor:'#1B1B1B'
      },

      cardTitle:{
        fontSize: 20, 
        color:'white'
      },

      cardText:{
        marginBottom: .5, 
        paddingTop: 10, 
        fontSize: 15,
        color: 'white'
      }
  });
export default Events;
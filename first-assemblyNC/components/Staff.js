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

const Staff = () =>{
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
                 <Text style={styles.headerText}>Staff</Text>
            </View>
            <ScrollView>
            <Card style={{flexDirection:'right'}}>
                 <Card.Title style={{fontSize:25}}>Pastor Steve DeSantis</Card.Title>
                 <Card.Title>Lead Pastor</Card.Title>
                 <Card.Image source={require('../assets/Pastor-Steve-NC.jpeg')} resizeMode="contain" style={{marginTop:20}}></Card.Image>
                 <Text style={{textAlign:'center', paddingTop:30}}>Pastor Steve grew up in the New Castle area and First Assembly of God was his home church. He has served as a lead pastor for over 27 years in Warwick, RI and Clearfield, PA before moving back to New Castle in March of 2021. He has also served as a Sectional Secretary-Treasurer and Presbyter in the PennDel Ministry Network, and earned a Master’s Degree in Theology from the University of Valley Forge. Pastor Steve is married and has 6 children, 3 dogs and 2 cats. He has a passion to teach the Word of God in an accurate, understandable, and applicable way that will help people grow in their relationship with Christ. He loves to laugh and also enjoys a variety of sports, hobbies, and home projects. </Text>
            </Card>
            </ScrollView>
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
export default Staff;
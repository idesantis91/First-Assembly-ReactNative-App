import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-elements';
import axios from 'react-native-axios';
import AppLoading from 'expo-app-loading';
import { 
    useFonts,
    Lobster_400Regular 
  } from '@expo-google-fonts/lobster';

  const supportedURL = 'https://www.facebook.com/NCFirstAssemblyOfGod/';
  const unsupportedURL = "https://www.facebook.com/NCFirstAssemblyOfGod/";

const OpenURLButton = ({ url, children }) => {

    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button color="white" title={children} onPress={handlePress} />;
};

const HomeSection = () =>{
     
    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter',
            params: {Verse: '16', chapter: '3', Book: 'John'},
            headers: {
                'x-rapidapi-key': '57fd5d70a6msh2a1c921fece9bb8p187feajsn91de71ff04f4',
                'x-rapidapi-host': 'ajith-holy-bible.p.rapidapi.com'
                }
        })
        .then((response) => {
            setData(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
        }, []);
        let[fontsLoaded, error] = useFonts({
            Lobster_400Regular 
         });
         if(!fontsLoaded){
             return <AppLoading/>
         }
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
                        <Text style={{color:'white', textAlign:'center', paddingRight:40, paddingLeft:40, fontSize:20, fontWeight:'bold'}}>Services</Text>
                        <Text style={styles.serviceText}>Sunday: Morning Worship 10:30am</Text>
                        <Text style={styles.serviceText}>Wednesday: Family Night Ministries 6:30pm</Text>
                     </Card>
                    <Card containerStyle={styles.container}>
                        <Card.Title style={styles.cardTitle}>Verse of the Day</Card.Title>
                        <Card.Divider style={{width:200, marginLeft:60}}/>
                        <Text style={{color: 'white', textAlign:'left'}}>{data.Verse} {data.Output}</Text>
                        <Text style={{color:'white', fontWeight:'bold', paddingTop:10, textAlign:'center'}}>{data.Book} {data.Chapter}:{data.Verse}</Text>
                    </Card>
                    <View>
                        <Text style={styles.socialHeader}>Check our FaceBook</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.buttonContainer}>
                            <OpenURLButton url={supportedURL}>First Assembly</OpenURLButton>
                        </View>
                    </TouchableOpacity>
                 </ScrollView>
        </LinearGradient>
    )
}
//Style 
const styles = StyleSheet.create({
    buttonContainer:{
        justifyContent:'center',
        marginLeft:98,
        marginTop:30,
        width:200,
        height:40,
        backgroundColor:'#27648A',
        borderRadius:20
    },
    buttonText:{
        textAlign:'center',
        color:'white'
    },
    socialHeader:{
        color:'white', 
        textAlign:'center',
        paddingTop:40,
        fontSize:20,

    },
    welcome:{
        position:'relative',
        marginTop:50,
    },
    serviceText:{
        color: 'white',
        paddingTop:30,
        textAlign:'center',
        fontSize: 15,
        fontStyle: 'italic'
    },
    container: {
        marginTop:30,
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
        textAlign:'center',
        color:'white'
      },
  });
export default HomeSection;
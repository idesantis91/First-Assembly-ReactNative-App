import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Header = () => {

    return(
        <View style={styles.header}>
        <LinearGradient
            colors={['#414345','#232526']}
            style={styles.background}
            ></LinearGradient>
            <Image source={require('../assets/Logo.png')} style={{
            resizeMode: "cover",
            height: 50,
            width: 50
          }}/>
        </View>
    )
}

//style

const styles = StyleSheet.create({
    header:{
        
        height: 90,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
});

export default Header;
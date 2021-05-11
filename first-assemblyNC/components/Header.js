import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () =>{

    return(
        <View style={styles.header}>
            <Image source={require('../assets/Logo.png')}/>
        </View>
    )
}

//style

const styles = StyleSheet.create({
    header:{
        height: 90,
    }
});

export default Header;
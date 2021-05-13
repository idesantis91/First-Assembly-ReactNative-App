import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeSection from '../components/HomeSection';
import Events from '../components/Events';

const Tab = createBottomTabNavigator()
const TabNavigation = () =>{

    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeSection}/>
            <Tab.Screen name="Events" component={Events}/>
        </Tab.Navigator>
    )
}

export default TabNavigation;
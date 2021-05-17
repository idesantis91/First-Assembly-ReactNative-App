import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeSection from '../components/HomeSection';
import Events from '../components/Events';
import Staff from '../components/Staff';

const Tab = createBottomTabNavigator()
const TabNavigation = () =>{

    return(
        <Tab.Navigator>
            <Tab.Screen name="Events" component={Events}/>
            <Tab.Screen name="Home" component={HomeSection} initialRouteName={HomeSection}/>
            <Tab.Screen name="Staff" component={Staff}/>
        </Tab.Navigator>
    )
}

export default TabNavigation;
import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeSection from '../components/HomeSection';
import Events from '../components/Events';
import Staff from '../components/Staff';

const Tab = createBottomTabNavigator();
const TabNavigation = () =>{
    return(
        <Tab.Navigator
            tabBarOptions={{
               showLabel:false,
               showIcon:true,
               style:{
                   position:'absolute',
                   backgroundColor:'black',
                   borderRadius: 15
               }
            }}
        >
            <Tab.Screen name="Events" component={Events} options={{
                tabBarIcon:({focused}) =>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Icon name="calendar" size={30} color="white" /> 
                        <Text style={{color: focused ? '#27648A' : 'white', fontSize:12, paddingTop:5}}>Events</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Home" component={HomeSection} initialRouteName={HomeSection} options={{
                tabBarIcon:({focused}) =>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Icon name="home" size={35} color="white"/> 
                        <Text style={{color: focused ? '#27648A' : 'white', fontSize:12}}>Home</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Staff" component={Staff} options={{
                tabBarIcon:({focused}) =>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Icon name="address-book" size={30} color="white" /> 
                        <Text style={{color: focused ? '#27648A' : 'white', fontSize:12, paddingTop:5}}>Staff</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default TabNavigation;
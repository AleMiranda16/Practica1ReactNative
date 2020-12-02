import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AboutScreen from '../Screens/AboutScreen';
import AboutScreen2 from '../Screens/AboutScreen2';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from 'expo-constants';

const Tab =  createMaterialTopTabNavigator();

export default function TopTapNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="AboutScreen"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showIcon:true,
                showLabel:true,
                labelStyle:{
                    fontSize:11
                },
                style:{
                    paddingTop:Constants.statusBarHeight,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="AboutScreen"
                component={AboutScreen}
                options={{
                    tabBarLabel:"Acerca 1",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-github"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="AboutScreen2"
                component={AboutScreen2}
                options={{
                    tabBarLabel:"Acerca2",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"md-call"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}
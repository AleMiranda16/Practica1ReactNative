import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="WelcomeNav" component={WelcomeScreen}
                options={{headerShown:true, headerTitle:'React native'}}
            />
            <Stack.Screen name="HomeNav" component={HomeScreen}
                options={{headerShown:false}}
            />


        </Stack.Navigator>

    )
}
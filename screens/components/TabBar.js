import React from 'react';
import { View, Text } from 'react-native';
import Main from '../Main';
import SignUp from '../SignUp';
import Login from '../Login';
//INSTALLED LIBRARIES
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const TabBar = () => {

    const Tab = createBottomTabNavigator();

    return (
        
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) =>{
                        let iconName;

                        if(route.name === 'Main'){
                            iconName = focused ?
                                'home'
                                :
                                'home-outline';
                        }
                        else if(route.name === 'SignUp'){
                            iconName = focused ?
                                'pencil'
                                :
                                'pencil-outline';
                        }
                        else if(route.name === 'Login'){
                            iconName = focused ?
                                'log-in'
                                :
                                'log-in-outline';
                        }
                        return(
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    },
                })}
                tabBarOptions={{
                    activeBackgroundColor: 'tomato',
                    inactiveBackgroundColor: 'gray',
                }}
            >
                <Tab.Screen name="Main" component={Main} />
                <Tab.Screen name="SignUp" component={SignUp} />
                <Tab.Screen name="Login" component={Login} />
            </Tab.Navigator>
       
    )
}

export default TabBar

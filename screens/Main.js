;import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, StatusBar, Alert } from 'react-native';
import SearchField from './components/SearchField';
import MainAdvert from './MainAdvert';
import MainContents from './MainContents';
import MenuScreen from './MenuScreen';
import * as MenuThumbs from './components/MenuThumbs';

//IMPORTING MENUS FROM MENU FOLDER
import Breakfasts from './components/menus/Breakfasts';
import HotMeals from './components/menus/HotMeals';
import Salads from './components/menus/Salads';
import Sandwiches from './components/menus/Sandwiches';
import SignaturePizzas from './components/menus/SignaturePizzas';
import SpecialityBurgers from './components/menus/SpecialityBurgers';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//INSTALLED LIBRARIES
import {FontAwesome} from '@expo/vector-icons'
import { FlatList } from 'react-native';
import { Component } from 'react';
import { ListItem } from 'react-native-elements/dist/list/ListItem';

const Stack = createStackNavigator();

const Main = ({navigation}) => {

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor='#F2651C'
                networkActivityIndicatorVisible={true}
            />
            <View>
                <SearchField/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <MainAdvert/>
                </View>
                <View>
                    <MainContents/>
                </View>

                <MenuThumbs.SpecialityBurgers_Thumb/>
                <MenuThumbs.SignaturePizzas_Thumb/>
                <MenuThumbs.Sandwitches_Thumb/>  
                <MenuThumbs.Omelets_Thumb/>     
            </ScrollView>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
    },
})
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, StatusBar, Alert } from 'react-native';
import SearchField from './components/SearchField';
import MainAdvert from './MainAdvert';
import MainContents from './MainContents';
import * as Menu from './components/Menus';

//INSTALLED LIBRARIES
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native';
import { Component } from 'react';
import { ListItem } from 'react-native-elements/dist/list/ListItem';

const Main = ({navigation}) => {

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor='#F2651C'
                networkActivityIndicatorVisible={true}
                animated={true}
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

                <Menu.SpecialityBurgers_Thumb/>
                <Menu.SignaturePizzas_Thumb/>
                <Menu.Sandwitches_Thumb/>  
                <Menu.Omelets_Thumb/>     
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
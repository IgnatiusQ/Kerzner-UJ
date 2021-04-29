import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, StatusBar, Alert } from 'react-native';
import SearchField from './components/SearchField';
import MainAdvert from './MainAdvert';
import MainContents from './MainContents';

//INSTALLED LIBRARIES
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

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
            <View>
                <MainAdvert/>
            </View>
            <View>
                <MainContents/>
            </View>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
    },
})
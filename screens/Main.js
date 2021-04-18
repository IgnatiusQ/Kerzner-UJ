import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text, StatusBar } from 'react-native';
//INSTALLED LIBRARIES
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';

const Main = ({navigation}) => {

        //STATES
        const [address, setAddress] = useState("");

        //ADDRESS SEARCH HANDLER
        const checkAddress = (text) =>{
            null    
        }

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor='#F2651C'
                networkActivityIndicatorVisible={true}
                animated={true}
            />

            <View style={styles.searchView}>
                <IconFontAwesome
                    style={styles.tabIcon}
                    name='bars'
                    size={40}
                    color='white'
                    onPress={null}
                />
                <View style={styles.searchContainer}>
                <TextInput style={styles.searchField}
                    placeholder="Enter your address"
                    keyboardType='default'
                    value={address}
                    onChangeText={(text)=>setAddress(text)}
                />
                <IconEntypo
                    style={styles.locationIcon}
                    name='location-pin'
                    size={30}
                    color={'#C4C4C4'}
                />
                </View>
            </View>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    searchView:{
        backgroundColor:'#F2651C',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'flex-start',
        height:80
    },
    tabIcon:{
        marginHorizontal:10,
        color:'#FFFFFF', 
    },
    searchContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    locationIcon:{
        top:10
    },
    searchField:{
        backgroundColor:'#F6F6F6',
        width:270,
        borderWidth:2,
        borderColor:'#E8E8E8',
        borderRadius:50,
    }

})

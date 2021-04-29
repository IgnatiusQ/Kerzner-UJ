import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, Dimensions} from 'react-native'
import SignUp from './SignUp'
//INSTALLED LIBRARIES
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GetStarted = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor='#F2651C'
                networkActivityIndicatorVisible={true}
                animated={true}
            />
            <MaterialIcons
                style={styles.logo}
                name='chef-hat'
                size={130}
                color='#FFFFFF'
            />
            <Text style={styles.slogan}>
                Food for{"\n"}Everyone
            </Text>
            <TouchableOpacity
                style={styles.getStartedButton}
                onPress={()=>navigation.navigate(SignUp)}
            >
                <Text style={styles.getStartedText}>
                    Get started
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        height:'100%',
        backgroundColor:'#F2651C',
    },
    logo:{
        alignSelf:'flex-start',
        marginTop:30,
        marginLeft:10,
    },
    slogan:{
        alignSelf:'flex-start',
        marginLeft:30,
        color:'#FFFFFF',
        fontSize:60,
        fontWeight:'bold',
    },
    getStartedButton:{
        marginTop:170,
        backgroundColor:'#FFFFFF',
        width:'100%',
        height:60,
    },
    getStartedText:{
        fontSize:20,
        color:'#F2651C',
        alignSelf:'center',
        marginVertical:15,
    },
})

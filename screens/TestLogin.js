import React from 'react'
import { View, Text,StyleSheet, TextInput, Button, TouchableOpacity, Linking, Image } from 'react-native'
import { useState } from 'react/cjs/react.development'
//INSTALLED PACKAGES:

const TestLogin = () => {
    const [passwordShowHide, setPasswordShowHide] = useState(true);

    return (
        <View style={styles.View1}>
            <View>
                <Text style={styles.LogInText}>
                    Log In
                </Text>
                <Text style={styles.KerznerHeadText}>
                    TheKerzner@UJ
                </Text>
                <Image
                    style={styles.UjImage}
                    source={{uri:'https://studentroom.co.za/wiki/wp-content/uploads/2020/12/uj-logo-768x402.jpg'}}
                />
                <TextInput
                    style={styles.InputBoxEmail}
                    placeholder="Email"
                    keyboardType='email-address'
                    textContentType='emailAddress'
                />
                <TextInput
                    style={styles.InputBoxPassword}
                    placeholder="Password"
                    textContentType='password'
                    keyboardType='visible-password'
                />
                <TouchableOpacity style={styles.LogSignButton}>
                    <Text style={styles.LogSignText}>
                        Log In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.LogSignButton}>
                    <Text style={styles.LogSignText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <Text style={styles.ForgotPassText}>
                    Forgot Password?
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    View1:{
        width: '100%',
        alignItems: 'center',
        height:'100%',
        backgroundColor:'#FFFFFF',
    },
    LogInText:{
        fontFamily:"Sherif",
        alignSelf:"center",
        fontSize:20,
        color:"#000000",
    },
    KerznerHeadText:{
        fontFamily:"Elephant",
        marginTop:30,
        fontWeight:"bold",
        fontSize:36,
        alignSelf:"center",
        color:"#F2651C",
    },
    UjImage:{
        width:250,
        height:120,
        marginTop:10,
        resizeMode:'stretch',
        alignSelf:'center',
    },
    InputBoxEmail:{
        backgroundColor:"#F6F6F6",
        borderWidth:1,
        height:40,
        borderColor:"#F2994A",
        borderRadius:8,
        width:320,
    },
    InputBoxPassword:{
        backgroundColor:"#F6F6F6",
        borderWidth:1,
        height:40,
        borderColor:"#F2994A",
        borderRadius:8,
        width:320,
        marginTop:15,
        marginBottom:20,
    },
    LogSignButton:{
        borderWidth:1,
        backgroundColor:"#F2651C",
        borderColor:"#FFFFFF",
        borderRadius:100,
        alignItems:"center",
        height:40,
        marginTop:10,
    },
    LogSignText:{
        fontFamily:"Inter",
        fontWeight:"500",
        color: "#FFFFFF",
        marginTop:10,
    },
    ForgotPassText:{
        alignSelf:"center",
        color:"#F2651C",
        fontSize:16,
        fontFamily:"Inter",
        fontWeight:"600",
        marginTop:45,
    }
});

export default TestLogin

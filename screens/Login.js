import React, {useState, useEffect} from 'react'
import { View, Text,StyleSheet, TextInput, TouchableOpacity, StatusBar, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
//INSTALLED PACKAGES:
import PasswordInputText from 'react-native-hide-show-password-input';


const Login = ({navigation}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInButton = () =>{
        navigation.navigate('Main');
    };

    const SignUpButton = () =>{
        navigation.navigate('SignUp');
    };


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS==="android"?"height":"height"}
            style={styles.View1}
        >
            <StatusBar
                animated={true}
                backgroundColor='#F9F9F9'
                networkActivityIndicatorVisible={true}
                animated={true}
            />

            <ScrollView>
                <View style={styles.textSection}>
                    <Text style={styles.LogInText}>
                        Log In
                    </Text>
                </View>
                <Text style={styles.KerznerHeadText}>
                    TheKerzner@UJ
                </Text>
                <Image
                    style={styles.UjImage}
                    source={require('../image_props/logo_white.jpg')}
                />
                <TextInput
                    style={styles.InputBoxEmail}
                    placeholder="Email"
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    value={email}
                    onChangeText={(email)=>setEmail(email)}
                />
                <PasswordInputText
                    style={styles.InputBoxPassword}
                    value={password}
                    onChangeText={(password)=>setPassword(password)}
                />
                <TouchableOpacity
                    style={styles.LogSignButton}
                    onPress={signInButton}    
                >
                    <Text style={styles.LogSignText}>
                        Log In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.LogSignButton}
                    onPress={SignUpButton}
                >
                    <Text style={styles.LogSignText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ForgotPassButton}>
                    <Text style={styles.ForgotPassText}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    View1:{
        flex:1,
        width: '100%',
        alignItems: 'center',
        height:'100%',
        backgroundColor:'#FFFFFF',
    },
    textSection:{
        borderBottomColor:'#E4E4E4',
        borderBottomWidth:1,
    },
    LogInText:{
        fontWeight:'bold',
        alignSelf:"center",
        fontSize:20,
        color:"#F2651C",
        marginVertical:5,
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
        width:120,
        height:120,
        marginTop:10,
        resizeMode:'stretch',
        alignSelf:'center',
        marginBottom:20.
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
        borderColor:"#F2994A",
        borderRadius:8,
        width:320,
        height:40,
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
    ForgotPassButton:{
        backgroundColor:"transparent",
        alignSelf:"center",
    },
    ForgotPassText:{
        color:"#F2651C",
        fontSize:16,
        fontFamily:"Inter",
        fontWeight:"600",
        marginTop:10,
    }
});

export default Login

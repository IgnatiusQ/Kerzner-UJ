import React, {useState, useEffect} from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView,TouchableOpacity, TextInput, Alert, LogBox, Platform } from 'react-native'
//INSTALLED LIBRARIES:
import auth from '@react-native-firebase/auth';
import PassMeter from "react-native-passmeter";

const SignUp = ({navigation}) => {

    const [user, setUser] = useState();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    let errorMessage = "";
    //PASSWORD METER:
    const MAX_LEN = 8,
        MIN_LEN = 6,
        PASS_LABELS = ["Too Short", "Weak", "Good", "Strong", "Strong"];
    const [showMeter, setShowMeter] = useState(false);

    useEffect(()=>{
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);     //IGNORE ANIMATION WARNING
    });

    const formErrors = () =>{
        if(errorMessage!==""){
            Alert.alert(
                "Sign Up",
                errorMessage,
                [   {
                        text: "Cancel",
                        onPress: () =>
                            navigation.navigate('Login')
                    },
        
                    {
                        text: "Okay",
                        onPress: () => errorMessage="",
                        style: 'cancel'
                    },
                ]
            )
        }
    }

    const signUp = async =>{
        let iterrator = 0;
        if(name!=="" & phone!=="" & email!=="" & password!=="" & confirmPassword!==""){
            let numberPattern = /^08[0-9]{9,}$/;

            if(name.length<=3 | name.match(numberPattern)===true){
                errorMessage = errorMessage+"\nInvalid name";
            }else{
                if(phone.match(numberPattern)===false | phone.length<=9){
                    errorMessage = errorMessage+"\nInvalid phone number";
                }else{
                    if(typeof email !== "undefined"){
                        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                        
                        if(!pattern.test(email)){
                            errorMessage = errorMessage+"\nPlease enter a valid email address";
                        }
                    }
                    else{
                        errorMessage = errorMessage+"\nPlease enter a valid email address";
                    }
                }
            }
        }
        else{
            errorMessage = errorMessage+"\nPlease fill in the empty fields";

            formErrors();
        
        }
        console.log(errorMessage);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS==="android"?"height":"height"}
            style={styles.container}
        >
            
                <ScrollView
                    style={styles.View1}
                    alignItems="center"
                >
                    <Text style={styles.SignUpText}>
                        Sign Up
                    </Text>
                    <Image
                        style={styles.UjImage}
                        source={{uri:'https://studentroom.co.za/wiki/wp-content/uploads/2020/12/uj-logo-768x402.jpg'}}
                    />
                    <TextInput
                        style={styles.InputBox}
                        placeholder="Name"
                        textContentType='none'
                        keyboardType='default'
                        value={name}
                        onChangeText={(text)=>setName(text)}
                    />
                    <TextInput
                        style={styles.InputBox}
                        placeholder="Phone"
                        textContentType='telephoneNumber'
                        keyboardType='phone-pad'
                        value={phone}
                        onChangeText={(text)=>setPhone(text)}
                    />
                    <TextInput
                        style={styles.InputBox}
                        placeholder="Email"
                        textContentType='emailAddress'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={(text)=>setEmail(text)}
                    />
                    <TextInput
                        style={styles.InputBox}
                        placeholder="Password"
                        textContentType='password'
                        keyboardType='visible-password'
                        maxLength={8}
                        value={password}
                        onChangeText={(text)=>setPassword(text)}
                    />
                    <PassMeter
                        style={styles.passMeter}
                        showLabels={true}
                        labels={PASS_LABELS}
                        password={password}
                        maxLength={MAX_LEN}
                        minLength={MIN_LEN}
                    />
                    <TextInput
                        style={styles.InputBox}
                        placeholder="Confirm Password"
                        textContentType='password'
                        keyboardType='visible-password'
                        maxLength={8}
                        value={confirmPassword}
                        onChangeText={(text)=>setConfirmPassword(text)}
                    />
                    <TouchableOpacity
                        style={styles.SignUpButton}
                        onPress={signUp}
                    >
                            <Text style={styles.SignUpButtonText}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    View1:{
        width: '100%',
        // alignItems: 'center',
        height:'100%',
        backgroundColor:'#FFFFFF',
    },
    SignUpText:{
        fontFamily:"Sherif",
        alignSelf:"center",
        fontSize:20,
        color:"#000000",
        
    },
    UjImage:{
        width:250,
        height:120,
        resizeMode:'stretch',
        alignSelf:'center',
    },
    InputBox:{
        borderColor:"#F2994A",
        backgroundColor:"#F6F6F6",
        borderWidth:1,
        height:40,
        borderRadius:8,
        width:320,
        marginTop:5,
        marginBottom:5,
    },
    SignUpButton:{
        borderWidth:1,
        backgroundColor:"#F2651C",
        borderColor:"#FFFFFF",
        borderRadius:100,
        alignItems:"center",
        height:40,
        width:320,
        marginTop:100,
    },
    SignUpButtonText:{
        fontFamily:"Inter",
        fontWeight:"500",
        color: "#FFFFFF",
        marginTop:10,
    },
})

export default SignUp

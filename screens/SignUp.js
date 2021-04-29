import React, {useState, useEffect} from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView,TouchableOpacity, TextInput, Alert, LogBox, Platform, StatusBar } from 'react-native'
//INSTALLED LIBRARIES:
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import PasswordInputText from 'react-native-hide-show-password-input';
import PassMeter from "react-native-passmeter";

const SignUp = ({navigation}) => {
    //INPUT STATE-VALUES & FUNCTION-UPDATORS
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [finalPassword, setFinalPassword] = useState("");
    
    //USER & DATABASE STATES
    const [initializing, setInitializing] = useState(true);
    const user = {
        userName:"",
        userPhone:"",
        userEmail:"",
        userPassword:"",
    };
    
    //ERROR MESSAGE
    let errorMessage = "";
    
    //PASSWORD  STRENGTH METER
    const MAX_LEN = 8,
        MIN_LEN = 6,
        PASS_LABELS = ["Too Short", "Weak", "Good", "Strong", "Strong"];


    //HANDLING USER STATE CHANGES
    // function onAuthStateChanged(user){
    //     setUser(user);
    //     if(initializing) {
    //         setInitializing(false);
    //     }
    // };

    //ALERT BOX ERRORS
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

    //SIGN UP BOTTON EVENT-HANDLER
    const signUp = async =>{
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
                        else{
                            testFirebase();
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

    useEffect(()=>{
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);     //IGNORE ANIMATION WARNING
        // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        // return subscriber;
    }, []);

    const testFirebase = () =>{
        // let ref = firestore().collection('userProfiles');
        // ref.add({
        //     nameData: name,
        //     phoneData: phone,
        //     emailData: email,
        //     passwordData: password,
        // }).then(() =>{
        //     console.log("Data Added")
        // }).catch((error) =>{
        //     console.log(`${error}`)
        //     loading:true
        // });


        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.userEg.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('userProfiles')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('SignUp', {userEg: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
                })
                .catch((error) => {
                    alert(error)
                });
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS==="android"?"height":"height"}
            style={styles.container}
        >
            <StatusBar
                animated={true}
                backgroundColor='#F9F9F9'
                networkActivityIndicatorVisible={true}
                animated={true}
            />
                <ScrollView
                    style={styles.View1}
                    alignItems="center"
                >
                    <View style={styles.textSection}>
                    <Text style={styles.SignUpText}>
                        Sign Up
                    </Text>
                </View>
                    <Image
                        style={styles.UjImage}
                        source={require('../image_props/logo_white.jpg')}
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
                        maxLength={10}
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
                    <PasswordInputText
                        style={styles.InputBoxPassword}
                        // placeholder="Password"
                        value={password}
                        onChangeText={(password)=>setPassword(password)}
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
        height:'100%',
        backgroundColor:'#FFFFFF',
    },
    textSection:{
        borderBottomColor:'#E4E4E4',
        borderBottomWidth:1,
    },
    SignUpText:{
        fontWeight:'bold',
        alignSelf:"center",
        fontSize:20,
        color:"#F2651C",
        marginVertical:5,
    },
    UjImage:{
        marginTop:10,
        width:120,
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
        marginTop:80,
    },
    SignUpButtonText:{
        fontFamily:"Inter",
        fontWeight:"500",
        color: "#FFFFFF",
        marginTop:10,
    },
})

export default SignUp

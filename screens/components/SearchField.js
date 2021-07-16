import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import Login from '../Login';
//INSTALLED LIBRARIES
import { useNavigation } from '@react-navigation/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Voice from 'react-native-voice';
import { TouchableHighlight } from 'react-native-gesture-handler';

const SearchField = ({navigation}) => {

    const backNavigation = useNavigation();

    const [searchMenu, setSearchMenu] = useState("");

    //VOICE INPUT STATES
    const [started, setStarted] = useState('');
    const [results, setResults] = useState([]);
    const [pitch, setPitch] = useState('');
    const [error, setError] = useState('');
    const [end, setEnd] = useState('');
    const [partialResults, setPartialResults] = useState([]);
    const [editableResult, setEditableResult] = useState(true);

    useEffect(()=>{
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechEnd = voiceInputOff;
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

        setResults('');

        return () => {
            //destroy the voice process after exiting current screen
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const alertRecording = () =>
        Alert.alert(
            "Kerzner@UJ",
            "Recording...",
            [
                {
                    text: "Cancel",
                    onPress: () =>{
                        voiceInputOff
                        destroyVoiceResults
                    },
                },
                {
                    text: "Done",
                    onPress: () =>{
                        voiceInputOff
                    },
                },
            ]
        );

    //BACK ARROW HANDLER
    const goToLogin = () =>{
        backNavigation.navigate(Login);
    }

    //SPEECH INPUT HANDLER
    const voiceInputOn = async (e) =>{
        alertRecording()
        try {
            await Voice.start('en-US');
            setPitch('');
            setError('');
            setStarted('');
            setResults([]);
            setPartialResults([]);
            setEnd('');
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    const onSpeechStart = (e) => {
        console.log('onSpeechStart: ', e);
        setStarted('√');
    };

    const voiceInputOff = async () =>{
        try {
            await Voice.stop();
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    //DESTROY/ERASE THE ARRAY OF PARTIAL RESULTS
    const destroyVoiceResults = async () => {
        try {
          await Voice.destroy();
          setPitch('');
          setError('');
          setStarted('');
          setResults([]);
          setPartialResults([]);
          setEnd('');
        } catch (e) {
          //eslint-disable-next-line
          console.error(e);
        }
    };

    //Log when errors are detected---FIX THE "5/client side error" ISSUE
    const onSpeechError = (e) => {
        console.log('onSpeechError: ', e);
        setError(JSON.stringify(e.error));
    };

    //RETURN RESULTS TO ARRAY WHEN SpeechRecognizer HAS ENDED
    const onSpeechResults = (e) => {
        console.log('onSpeechResults: ', e);
        setResults(e.value);
    };

    //RETURN DETECTED SOUND-PITCH
    const onSpeechVolumeChanged = (e) => {
        console.log('onSpeechVolumeChanged: ', e);
        setPitch(e.value);
    };

    const searchForMenu = (text) =>{
        setSearchMenu(text);
        if(searchMenu !== ""){
            console.log(searchMenu)
        }
    }

    return(
        <View style={styles.searchView}>
            <TouchableHighlight
                style={styles.backButton}
                onPress={()=>{
                    goToLogin}
                }
            >
                <Feather
                    style={styles.backIcon}
                    name='arrow-left'
                    size={40}
                    color='white'
                    selectionColor='#F2651C'
                    accessibilityIgnoresInvertColors={true}
                />
            </TouchableHighlight>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchField}
                    editable={editableResult}
                    placeholder='search menu'
                    keyboardType='default'
                    // value={searchMenu}
                    onChangeText={(text)=>searchForMenu(text)}
                >
                    {results[0]}
                </TextInput>
                <IconFontAwesome
                    style={styles.micIcon}
                    name='microphone'
                    size={30}
                    color={'#C4C4C4'}
                    onPress={voiceInputOn}
                />
            </View>
        </View>
    )
}
export default SearchField;

const styles = StyleSheet.create({
    searchView:{
        backgroundColor:'#F2651C',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'flex-start',
        height:50
    },
    backButton:{
        backgroundColor:'transparent'
    },
    backIcon:{
        marginHorizontal:5,
        color:'#FFFFFF', 
    },
    searchContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    micIcon:{
        top:5,
        right:30,
    },
    searchField:{
        backgroundColor:'#F6F6F6',
        width:300,
        borderWidth:2,
        fontSize:15,
        height:40,
        textAlign:'center',
        borderColor:'#E8E8E8',
        borderRadius:50,
    }

})
// import React, {useState, useEffect, Component} from 'react';
// import * as Location from 'expo-location'
// import * as Permissions from 'expo-permissions';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   NavigationApps,
//   actions,
//   googleMapsTravelModes
// } from "react-native-navigation-apps";
// import firestore from '@react-native-firebase/firestore'
// import { Button, Text, StyleSheet, View } from 'react-native';

// function Test(){
//   const [hasPermission, setHasPermission] = useState(true);
//   const [loadLatitude] = useState("12.99940");;
//   const [loadLongitude] = useState("-18.2342");

//   const ref = firestore().collection("coordinates");
//   async function addLat(){
//     await ref.add({
//       name:"coords",
//       latitude:"21212.222",
//     })
//   }

//   useEffect(() => {
//     (async()=>{
//       let{LocationStatus}=await Permissions.askAsync(Permissions.LOCATION);
//       setHasPermission(LocationStatus==='granted');

//       let location=await Location.getCurrentPositionAsync({enableHighAccuracy:true});
//       // loadLatitude=location.coords.latitude;
//       // loadLongitude=location.coords.longitude;
//       console.log("loaded")
//     })
//   });
  
//   // let location= Location.getCurrentPositionAsync({enableHighAccuracy:true});
//   // let locationInfo={
//   //   latitude:location.coords.latitude,
//   //   longitude:location.coords.longitude
//   // }

//   //     try {
//   //       AsyncStorage.setItem("savedLocation", JSON.stringify(locationInfo));
//   //     } catch (error) {
//   //       console.error(error.message)
//   //     }

//   // let locationObj = AsyncStorage.getItem("savedLocation");
//   // const parsedLocationObj = JSON.parse(locationObj);
//   // let locationLatitude = parsedLocationObj.latitude;
//   // let locationLongitude = parsedLocationObj.longitude;

//   return(
//     <>
//     <Button onPress={()=>addLat()} title="ADD LAT"/>
//     <NavigationApps
//       iconSize={50}
//       row
//       address='Campus Square Auckland Park'
//       waze={{
//         address:'',
//         lat:{loadLatitude},
//         long:{loadLongitude},
//         action:actions.navigateByLatAndLon}}
//       googleMaps={{
//         lat:loadLatitude,
//         lon:loadLongitude,
//         action: actions.navigateByAddress,
//         travelMode:googleMapsTravelModes.walking}}
//     />
//     </>
//   );
// }
// export default Test;









import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Voice from 'react-native-voice';   // import Voice


const App = () => {
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);
  const [editableResult, setEditableResult] = useState(false);
  const [finalResult, setFinalResult] = useState([]);

  //testing
  const [editableText, setEditableText] = useState('');

  useEffect(() => {
    //Callbacks for process statuses
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      //destroy the process after exiting current screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e) => {
    console.log('onSpeechStart: ', e);
    setStarted('√');
  };

  const onSpeechEnd = (e) => {
  //End process when no speech is recognized---REMEMBER TO FIX THIS, MAN!!!
    console.log('onSpeechEnd: ', e);
    setEnd('√');
  };

  const onSpeechError = (e) => {
    //Log when errors are detected---FIX THE "5/client side error" ISSUE
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = (e) => {
    //RETURN RESULTS TO ARRAY WHEN SpeechRecognizer HAS ENDED
    console.log('onSpeechResults: ', e);
    setResults(e.value);
  };

  const onSpeechPartialResults = (e) => {
    //RETURN PARTIAL RESULTS---ALL MATCHING WORDS
    console.log('onSpeechPartialResults: ', e);
    setPartialResults(e.value);
  };
  
  //ADDED BUT A USELESS FEATURE---I'LL REMOVE THIS AFTER TESTING :(
  const onSpeechVolumeChanged = (e) => {
    //RETURN DETECTED SOUND-PITCH
    console.log('onSpeechVolumeChanged: ', e);
    setPitch(e.value);
  };

  const startRecognizing = async () => {
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

  const stopRecognizing = async () => {
    //SLOW TO EXECUTE---FIX THIS LATER, MAN!!!
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    //ALSO SLOW TO EXECUTE---FIX!!!
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };
  //ANOTHER USELESS FEATURE---REMOVE THIS AFTER TESTING!!!
  const destroyRecognizer = async () => {
    //DESTROY/ERASE THE ARRAY OF PARTIAL RESULTS
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

  //ENABLE RESULT EDITTING
  const enableResultEdit = async () => {
    setEditableResult(true);
  };

  const saveFinalResult = async () => {
    if(results.length === 0){
      alert("Please record speech")
    }
    else{
      alert("Speech");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          TESTING THE SPEECH-TO-TEXT FEATURE{"\n"}
          (-_-)
        </Text>
        <Text style={styles.textStyle}>
          Press mic to start recording
        </Text>
        <View style={styles.headerContainer}>
          <Text style={styles.textWithSpaceStyle}>
            {`Started: ${started}`}
          </Text>
          <Text style={styles.textWithSpaceStyle}>
            {`End: ${end}`}
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.textWithSpaceStyle}>
            {`Pitch: \n ${pitch}`}
          </Text>
          <Text style={styles.textWithSpaceStyle}>
            {`Error: \n ${error}`}
          </Text>
        </View>
        <TouchableHighlight onPress={startRecognizing}>
          <Image
            style={styles.imageButton}
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
            }}
          />
        </TouchableHighlight>
        <Text style={styles.textStyle}>
          Partial Results
        </Text>
        <ScrollView>
          {partialResults.map((result, index) => {
            return (
              <Text
                key={`partial-result-${index}`}
                style={styles.textStyle}>
                {result}
              </Text>
            );
          })}
        </ScrollView>
        <Text style={styles.textStyle}>
          Results
        </Text>
        <ScrollView style={{marginBottom: 42}}>
          {results.map((result, index) => {
            return (
              <TextInput
                editable={editableResult}
                key={`result-${index}`}
                style={styles.textStyle}>
                {result}
              </TextInput>
            );
          })}
        </ScrollView>
        
        <ScrollView style={{marginBottom:42}}>
        <Text>
          {editableText ?
            "${editableText}" : "Please select the correct speech combination"
          }
        </Text>
      
        </ScrollView>

        <View style={styles.horizontalView}>
          {/* STOP RECORDING BUTTON */}
          <TouchableHighlight
            onPress={stopRecognizing}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Stop
            </Text>
          </TouchableHighlight>
          {/* RESULTS EDIT BUTTON */}
          <TouchableHighlight
            onPress={enableResultEdit}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Edit
            </Text>
          </TouchableHighlight>
          {/* DESTROY RESULT BUTTON */}
          <TouchableHighlight
            onPress={destroyRecognizer}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Destroy
            </Text>
          </TouchableHighlight>
          {/* SAVE FINAL RESULT BUTTON */}
          {/* RESULTS EDIT BUTTON */}
          <TouchableHighlight
            onPress={saveFinalResult}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Done
            </Text>
          </TouchableHighlight>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  horizontalView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  textStyle: {
    textAlign: 'center',
    padding: 12,
  },
  imageButton: {
    width: 50,
    height: 50,
  },
  textWithSpaceStyle: {
    flex: 1,
    textAlign: 'center',
    color: '#B0171F',
  },
});
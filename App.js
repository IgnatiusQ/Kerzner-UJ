import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';
import VoiceNative from './screens/Test.js';
import TestLogin from './screens/TestLogin';
import TestSignUp from './screens/TestSignUp';
//INSTALLED LIBRARIES:
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
//REMINDER: USE "import { Asset, Constants, FileSystem, Permissions } from 'react-native-unimodules';" TO IMPORT CERTAIN MODULES

const Stack = createStackNavigator();
function App(){
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        networkActivityIndicatorVisible={true}
        animated={true}
        
      />
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName = 'TestSignUp'>
          <Stack.Screen name='TestLogin' component={TestLogin} options={{headerShown:false}}/>
          <Stack.Screen name='TestSignUp' component={TestSignUp} options={{headerShown:false}}/>
          <Stack.Screen name='VoiceNative' component={VoiceNative} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  container:{
    // EMPTY
  }
})

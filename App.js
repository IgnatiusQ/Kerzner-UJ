/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';
import VoiceNative from './screens/Test.js';
//REMINDER: USE "import { Asset, Constants, FileSystem, Permissions } from 'react-native-unimodules';" TO IMPORT CERTAIN MODULES

function App(){
  return (
    <>
          <Text>Visible</Text>
          <VoiceNative />
    </>
  );
};
export default App;

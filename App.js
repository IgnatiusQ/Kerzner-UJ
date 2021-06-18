import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';
import VoiceNative from './screens/Test.js';
import Splash from './screens/Splash.js';
import GetStarted from './screens/GetStarted.js';
import Login from './screens/Login.js';
import SignUp from './screens/SignUp.js';
import Main from './screens/Main.js';
import MenuScreen from './screens/MenuScreen';
import SearchField from './screens/components/SearchField.js';
import TabBar from './screens/components/TabBar.js';

//IMPORTING MENUS FROM MENU FOLDER
import Breakfasts from './screens/components/menus/Breakfasts';
import Drinks from './screens/components/menus/Drinks';
import Deserts from './screens/components/menus/Deserts';
import HotMeals from './screens/components/menus/HotMeals';
import Salads from './screens/components/menus/Salads';
import Sandwiches from './screens/components/menus/Sandwiches';
import SignaturePizzas from './screens/components/menus/SignaturePizzas';
import SpecialityBurgers from './screens/components/menus/SpecialityBurgers';

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
        backgroundColor='transparent'
        networkActivityIndicatorVisible={true}
        animated={true}
      />
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName = 'Main'>
          <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
          <Stack.Screen name='GetStarted' component={GetStarted} options={{headerShown:false}}/>
          <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
          <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
          <Stack.Screen name='SearchField' component={SearchField} options={{headerShown:false}}/>
          <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>
          <Stack.Screen name='MenuScreen' component={MenuScreen} options={{headerShown:false}}/>
          {/* MAIN SCREEN STACK */}
          {/* MENUS STACK */}
          <Stack.Screen name='Deserts' component={Deserts} options={{headerShown:false}}/>
          <Stack.Screen name='Drinks' component={Drinks} options={{headerShown:false}}/>
          <Stack.Screen name='Breakfasts' component={Breakfasts} options={{headerShown:false}}/>
          <Stack.Screen name='HotMeals' component={HotMeals} options={{headerShown:false}}/>
          <Stack.Screen name='Salads' component={Salads} options={{headerShown:false}}/>
          <Stack.Screen name='Sandwiches' component={Sandwiches} options={{headerShown:false}}/>
          <Stack.Screen name='SignaturePizzas' component={SignaturePizzas} options={{headerShown:false}}/>
          <Stack.Screen name='SpecialityBurgers' component={SpecialityBurgers} options={{headerShown:false}}/>
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

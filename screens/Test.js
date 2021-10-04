import React from 'react'
import { View, Text, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import * as firebase  from 'firebase'

const Test = () => {
  const navigation = useNavigation();

  const signOut = () =>{
    firebase.default
      .auth()
      .signOut()
      .then(function(){
        navigation.navigate('Login');
        console.log("Signed Out")
      }).catch(function(err){
        alert(err);
        console.log(err);
      })
  }

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor='#F2651C'
        networkActivityIndicatorVisible={true}
        animated={true}
      />

      <ScrollView>
        <TouchableOpacity style={styles.fieldContainer}>
          <FontAwesome
            style={styles.profileIcon}
            name='user-circle-o'
            size={30}
            color='#FFFFFF'
          />
          <Text style={styles.text}>
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fieldContainer}
          onPress={()=>navigation.navigate('Cart')}
        >
          <FontAwesome
            style={styles.profileIcon}
            name='shopping-cart'
            size={30}
            color='#FFFFFF'
          />
          <Text style={styles.text}>
            Orders
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fieldContainer}>
          <FontAwesome
            style={styles.profileIcon}
            name='wpforms'
            size={30}
            color='#FFFFFF'
          />
          <Text style={styles.text}>
            Privacy Policy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fieldContainer}>
          <FontAwesome
            style={styles.profileIcon}
            name='shield'
            size={30}
            color='#FFFFFF'
          />
          <Text style={styles.text}>
            Security
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fieldContainer}
          onPress={signOut}
        >
          <FontAwesome
            style={styles.profileIcon}
            name='sign-out'
            size={30}
            color='#FFFFFF'
          />
          <Text style={styles.text}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F2651C',
    paddingVertical:106.5
  },
  fieldContainer:{
    marginHorizontal:15,
    borderBottomWidth:2,
    borderBottomColor:'#ffa275',
    flexDirection:'row'
  },
  profileIcon:{
    marginVertical:20,
  },
  text:{
    color:'#FFFFFF',
    marginHorizontal:10,
    marginVertical:20,
  }
})
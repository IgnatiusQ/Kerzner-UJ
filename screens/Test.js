import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, Button } from 'react-native';





const Test = () => {

  // auth()
  // .signInWithEmailAndPassword('androidtest@gmail.com', 'androidTest')
  // .then(() => {
  //   console.log('User account created & signed in!');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/email-already-in-use') {
  //     console.log('That email address is already in use!');
  //   }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!');
  //   }

  //   console.error(error);
  // });

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  auth().createUserWithEmailAndPassword("androidtest@gmail.com", "androidTest").then(()=>{
    console.log("Account created");
  })

    
  
  
  
  
  
  
  
  
  
  
  const [item, setItem] = useState('');

    const ref = firestore().collection('userProfiles')
  
    const addItem = async() =>{
      await ref.add({
        title: item,
        complete: false,
      });
      setItem('');
    }

  return (
    <View>
      <TextInput
        style={{width:230, borderColor:'black', borderWidth:2, alignSelf:'center', marginVertical:20}}
        placeholder='Add something'
        onChangeText={(item)=>{setItem}}
      />
      <Button
        title='Add'
        onPress={()=>addItem()}
      />
      <Text>
        Added Items :
      </Text>
    </View>
  )
}

export default Test












//Initial firestore rules

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if true;
//     }
//   }
// }
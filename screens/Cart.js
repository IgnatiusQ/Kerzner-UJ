import React,{ useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Cart = () => {
    const navigation = useNavigation();

    const [jsonMenuValue01, setFinalMenuValue01] = useState("");
    const [jsonMenuValue02, setFinalMenuValue02] = useState("");
    const [jsonMenuValue03, setFinalMenuValue03] = useState("");
    const [jsonMenuValue04, setFinalMenuValue04] = useState("");
    const [jsonMenuValue05, setFinalMenuValue05] = useState("");

    useEffect(() =>{
         () =>{
            try{
                setFinalMenuValue01( AsyncStorage.getItem('Breakfasts01'));
                setFinalMenuValue02( AsyncStorage.getItem('Breakfasts02'));
                setFinalMenuValue03( AsyncStorage.getItem('Breakfasts03'));
                setFinalMenuValue04( AsyncStorage.getItem('Breakfasts04'));
                setFinalMenuValue05( AsyncStorage.getItem('Breakfasts05'));
            }catch(err){
                console.log(err)
            }
            console.log("OOOOOOO");
        }
    })

    return (
        <View>
            <Text style={styles.text}>
                wow
                {jsonMenuValue01} {"\n"} {jsonMenuValue02} {"\n"} {jsonMenuValue03} {"\n"} {jsonMenuValue04} {"\n"} {jsonMenuValue05}
            </Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    text:{
        color:"black"
    }
})

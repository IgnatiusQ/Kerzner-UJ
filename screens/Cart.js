import React,{ useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from 'react-native'

const Cart = () => {
    const navigation = useNavigation();

    const testFunc = async () =>{
        let newVara1 = await AsyncStorage.getItem('Breakfasts01');
        
        // setNewLoggedVar(loggedVar);
        console.log(newVara1);

        return(
            <View>
                <Text>
                    {newVara1}
                </Text>
            </View>
        )


        alert(newVara1)
    };
    
    const newVar1 = AsyncStorage.getItem('Breakfasts01');
    const newVar2 = AsyncStorage.getItem('Breakfasts02');
    const newVar3 = AsyncStorage.getItem('Breakfasts03');
    const newVar4 = AsyncStorage.getItem('Breakfasts04');
    

    // const catValue1 = () => {
        if(newVar1 == newVar1){
            return(
                <View>
                <Text>1st IF-Statement</Text>
                

                <Button
                    title="view"
                    onPress={testFunc}
                />
                <Text>
                    ...
                </Text>
                <Button
                    title="clear"
                    onPress={()=>{AsyncStorage.clear(), alert("Cleared")}}
                />
                </View>
            )
        }
        else{
            return(
                <View>
                    <Text>2nd IF-Statement</Text>
                <Button
                    title="view2"
                    onPress={()=>console.log("\n",{newVar1}, "\n", {newVar2}, "\n", {newVar3}, "\n", {newVar4})}
                />
                <Text>
                    ...
                </Text>
                <Button
                    title="clear2"
                    onPress={()=>{AsyncStorage.clear(), alert("Cleared")}}
                />
                </View>
            )
        }
    // }
}

export default Cart

const styles = StyleSheet.create({
    text:{
        color:"black"
    }
})

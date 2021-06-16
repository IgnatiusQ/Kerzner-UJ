import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'

const HotMeals = () => {
    // const Creamed_Beef_Pasta = () =>{
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Text style={styles.menuTextHead}>
                        Menu
                    </Text>
                    <Image
                        style={styles.image}
                        source={require('../../../image_props/alex-munsell-auIbTAcSH6E-unsplash.jpg')}
                    />
                </View>
                <ScrollView>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Creamed Beef Pasta </Text>
                        <Text style={styles.menuIngredients}>Layered Beef with Provençale style sauce, cream {"&"} Pecorino Cheese </Text>
                        <Text style={styles.menuPrice}>R 110.00</Text>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Fish And Chips</Text>
                        <Text style={styles.menuIngredients}>Served with Choice of Side Salad or STH House Fries {"&"} tartare sauce</Text>
                        <Text style={styles.menuExtra}>A five spice Battered Hake fried to perfection</Text>
                        <Text style={styles.menuPrice}>R 85.00</Text>
                    </View>
                </ScrollView>
            </View>
        )
    // }
}
export default HotMeals

const styles = StyleSheet.create({
    container:{
        marginHorizontal:5,
        marginVertical:5,
        borderBottomColor:'#F2651C',
        borderBottomWidth:0.5,
    },
    menuTextHead:{
        fontSize:25,
        fontWeight:'bold',
    },
    image:{
        borderRadius:20,
        width:'100%',
        height:150,
    },
    menuContainer:{
        marginVertical:5,
        marginHorizontal:10,
        alignContent:'center',
        backgroundColor:'#FFFFFF',
        borderWidth:0.5,
        borderColor:'#FFFFFF',
        borderRadius:20,
    },
    menuName:{
        marginVertical:5,
        marginHorizontal:5,
        alignSelf:'center',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 20,
        color: '#000000'
    },
    menuPrice:{
        marginVertical:2,
        marginHorizontal:50,
        fontSize:20,
        color:'#000000',
        fontWeight:'bold',
    },
    menuIngredients:{
        alignSelf:'center',
        textAlign:'center',
        marginHorizontal:5,
        fontSize:15,
        color:"#5e5e5e",
    },
    menuExtra:{
        alignSelf:'center',
        fontSize:10,
        marginHorizontal:5,
        color:'#8a8a8a',
        marginBottom:5,
        marginHorizontal:5,
    }
})

import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SpecialityBurgers = () => {
    // const STH_Beef_Burger = () =>{
    const menuDetails = ({
        menu : "",
        price : "",
        key : "",
    })

    const showCart = async () =>{
        try{
            const jsonMenuValue01 = await AsyncStorage.getItem('SpecialityBurgers01');
            const jsonMenuValue02 = await AsyncStorage.getItem('SpecialityBurgers02');
            const jsonMenuValue03 = await AsyncStorage.getItem('SpecialityBurgers03')
            alert(jsonMenuValue01 + "\n" + jsonMenuValue02 + "\n" + jsonMenuValue03)
        }catch(err){
            console.log(err)
        }        
    }

    const AddToCart = async (menuDetails, menuVar, priceVar, keyVar) =>{
        menuDetails.menu=menuVar;
        menuDetails.price=priceVar;
        menuDetails.key=keyVar;
        
        try{
            const jsonMenuValue = JSON.stringify(menuDetails);
            await AsyncStorage.setItem(keyVar, jsonMenuValue)

            console.log("Speciality Burger added to Cart!")
        }catch(err){
            console.log(err)
        }
    }

        return (
            <View style={styles.container}>
                <View style={styles.headField}>
                    <Text style={styles.menuTextHead}>
                        Menu
                    </Text>
                    <TouchableOpacity
                        style={styles.cartButton}
                        onPress={showCart}
                    >
                            <IconFontAwesome
                                style={styles.cartIcon}
                                name='shopping-cart'
                                size={40}
                                color='#F2651C'
                                selectionColor='#FFFFFF'
                                accessibilityIgnoresInvertColors={true}
                            />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../../image_props/mahbub-majid-ijiBzdaxDx8-unsplash.jpg')}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>STH Beef Burger</Text>
                        <Text style={styles.menuIngredients}>An all-South African 100% beef Burger with brown mushroom and mozzarella cheese, Caramelized Onion, Lettuce {"&"} Tomato, Pickles served on a Sesame seed roll</Text>
                        <Text style={styles.menuExtra}>Served with Choice of Side Salad or STH House Fries</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 105.00</Text>
                            <TouchableOpacity
                                style={styles.BuyCartButton}
                                onPress={()=>{
                                    AddToCart(menuDetails, "STH Beef Burger", "R 105.00", "SpecialityBurgers01")}
                                }
                            >
                                <IconFontAwesome
                                    style={styles.AddCartIcon}
                                    name='cart-plus'
                                    size={30}
                                    color='#F2651C'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>STH Chicken Burger</Text>
                        <Text style={styles.menuIngredients}>An all-South African Chicken Breast Burger with brown mushroom and mozzarella cheese, Caramelized Onion, Lettuce {"&"} Tomato, Pickles served on a Sesame seed roll</Text>
                        <Text style={styles.menuExtra}>Served with Choice of Side Salad or STH House Fries</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 85.00</Text>
                            <TouchableOpacity
                                style={styles.BuyCartButton}
                                onPress={()=>{
                                    AddToCart(menuDetails, "STH Chicken Burger", "R 85.00", "SpecialityBurgers02")}
                                }
                            >
                                <IconFontAwesome
                                    style={styles.AddCartIcon}
                                    name='cart-plus'
                                    size={30}
                                    color='#F2651C'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>STH Falafel Burger</Text>
                        <Text style={styles.menuIngredients}>A North African chickpea Burger with brown mushroom and mozzarella cheese, Caramelized Onion, Lettuce {"&"} Tomato, Pickles served on a Sesame seed roll</Text>
                        <Text style={styles.menuExtra}>Served with Choice of Side Salad or STH House Fries</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 75.00</Text>
                            <TouchableOpacity
                                style={styles.BuyCartButton}
                                onPress={()=>{
                                    AddToCart(menuDetails, "STH Falafel Burger", "R 75.00", "SpecialityBurgers03")}
                                }
                            >
                                <IconFontAwesome
                                    style={styles.AddCartIcon}
                                    name='cart-plus'
                                    size={30}
                                    color='#F2651C'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    // }
}
export default SpecialityBurgers

const styles = StyleSheet.create({
    container:{
        marginHorizontal:5,
        marginVertical:5,
        borderBottomColor:'#F2651C',
        borderBottomWidth:0.5,
    },
    headField:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    cartButton:{
        backgroundColor:'transparent',       
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
    },
    buyField:{
        marginHorizontal:50,
        flexDirection:'row',
        justifyContent:'space-between',
    }
})

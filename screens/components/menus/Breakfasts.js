import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Breakfasts = (navigation) => {
    // const Waterford_Breakfast = () =>{
        const menuDetails = ({
            menu : "",
            price : "",
            key : "",
        })
    
        const showCart = async () =>{
            try{
                const jsonMenuValue01 = await AsyncStorage.getItem('Breakfasts01');
                const jsonMenuValue02 = await AsyncStorage.getItem('Breakfasts02');
                const jsonMenuValue03 = await AsyncStorage.getItem('Breakfasts03');
                const jsonMenuValue04 = await AsyncStorage.getItem('Breakfasts04');
                const jsonMenuValue05 = await AsyncStorage.getItem('Breakfasts05');
                alert(jsonMenuValue01 + "\n" + jsonMenuValue02 + "\n" + jsonMenuValue03 + "\n" + jsonMenuValue04 + "\n" + jsonMenuValue05)
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
    
                console.log("Breakfast added to Cart!")
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
                        source={require('../../../image_props/nathan-dumlao-2VSTCRx8ccY-unsplash.jpg')}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Waterford Breakfast</Text>
                        <Text style={styles.menuIngredients}>Beef Sausage, Bacon, Grilled Tomato, Field Mushroom, Egg {"&"} Toast</Text>
                        <Text style={styles.menuExtra}>(Served w/ your choice of toast) Brown/white/Rye</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 85.00</Text>
                            <TouchableOpacity
                                style={styles.BuyCartButton}
                                onPress={()=>{
                                    AddToCart(menuDetails, "Waterford Breakfast", "R 85.00", "Breakfasts01")}
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
                        <Text style={styles.menuName}>Beans With Hashbrown</Text>
                        <Text style={styles.menuIngredients}>Seasoned beans served with Hashbrown</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 65.00</Text>
                            <TouchableOpacity
                                style={styles.BuyCartButton}
                                onPress={()=>{
                                    AddToCart(menuDetails, "Beans With Hashbrown", "R 65.00", "Breakfasts02")}
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
                        <Text style={styles.menuName}>Homemade Waffle</Text>
                        <Text style={styles.menuIngredients}>Maple syrup</Text>
                        <Text style={styles.menuExtra}>(Served in with Berry Compote with/bacon)</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 65.00</Text>
                            <TouchableOpacity
                                style={styles.BuyCartButton}
                                onPress={()=>{
                                    AddToCart(menuDetails, "Homemade Waffle", "R 65.00", "Breakfasts03")}
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
                        <Text style={styles.menuName}>Breakfast Fruit Bowl</Text>
                        <Text style={styles.menuIngredients}>Seasonal fruit selection</Text>
                        <Text style={styles.menuExtra}>(Served with nuts {"&"} Bulgarian Yoghurt)</Text>
                        <Text style={styles.menuExtra}>Added Extras</Text>
                        <Text style={styles.menuExtra}>Muesli       R 8.00</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 72.00</Text>
                            <TouchableOpacity
                                style={styles.BuyCartButton}
                                onPress={()=>{
                                    AddToCart(menuDetails, "Breakfast Fruit Bowl", "R 72.00", "Breakfasts04")}
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
                        <Text style={styles.menuName}>Oats</Text>
                        <Text style={styles.menuIngredients}>Freshly prepared Oats served with honey {"&"} warm milk</Text>
                        <Text style={styles.menuExtra}>Added Extras</Text>
                        <Text style={styles.menuExtra}>Fruit       R 10.00</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 55.00</Text>
                            <TouchableOpacity
                                style={styles.BuyCartButton}
                                onPress={()=>{
                                    AddToCart(menuDetails, "STH Beef Oats", "R 55.00", "Breakfasts05")}
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
export default Breakfasts

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

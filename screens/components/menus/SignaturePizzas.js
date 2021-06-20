import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignaturePizzas = () => {
    // const BBQ_Chicken_Mushroom_Pizza = () =>{
        const menuDetails = ({
            menu : "",
            price : "",
            key : "",
        })
    
        const showCart = async () =>{
            try{
                const jsonMenuValue01 = await AsyncStorage.getItem('Pizzas01');
                const jsonMenuValue02 = await AsyncStorage.getItem('Pizzas02');
                const jsonMenuValue03 = await AsyncStorage.getItem('Pizzas03')
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
    
                console.log("Speciality Burger Stored!")
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
                        source={require('../../../image_props/emmanuel-zua-LxlMjePM7rQ-unsplash.jpg')}
                    />
            </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>BBQ Chicken {"&"} Mushroom Pizza</Text>
                        <Text style={styles.menuIngredients}>A freshly made pizza made with mozzarella cheese, Tangy Tomato, BBQ Chicken, Mushroom {"&"} Peppers</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 92.00</Text>
                            <TouchableOpacity
                                style={styles.BuyCartButton}
                                onPress={()=>{
                                    AddToCart(menuDetails, "BBQ Chicken & Mushroom Pizza", "R 92.00", "Pizzas01")}
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
                        <Text style={styles.menuName}>Four Seasons Pizza</Text>
                        <Text style={styles.menuIngredients}>A freshly prepared pizza made with Mozzarella Cheese, Spinach, Feta, Mushrooms {"&"} Olives</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 78.00</Text>
                            <TouchableOpacity
                                style={styles.BuyCartButton}
                                onPress={()=>{
                                    AddToCart(menuDetails, "Four Seasons Pizza", "R 78.00", "Pizzas02")}
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
                        <Text style={styles.menuName}>Meat Lovers Delight</Text>
                        <Text style={styles.menuIngredients}>A freshly prepared pizza made with Mozzarella Cheese, Salami, Pork Ribs, Feta, Mushrooms {"&"} Bacon Jam</Text>
                        
                        <View style={styles.buyField}>
                            <Text style={styles.menuPrice}>R 105.00</Text>
                            <TouchableOpacity
                                style={styles.BuyCartButton}
                                onPress={()=>{
                                    AddToCart(menuDetails, "Meat Lovers Delight", "R 105.00", "Pizzas03")}
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
export default SignaturePizzas

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

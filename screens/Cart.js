import React,{ useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {FontAwesome} from '@expo/vector-icons'

import {
    getUnhandledPromiseRejectionTracker,
    setUnhandledPromiseRejectionTracker,
  } from 'react-native-promise-rejection-utils'

const Cart = () => {
    const navigation = useNavigation();

    const prevTracker = getUnhandledPromiseRejectionTracker()

    const [menuViewBreakfast1, setmenuViewBreakfast1] = useState(false);
    const [menuViewBreakfast2, setmenuViewBreakfast2] = useState(false);
    const [menuViewBreakfast3, setmenuViewBreakfast3] = useState(false);

    const [menuViewSandwich1, setmenuViewSandwich1] = useState(false);
    const [menuViewSandwich2, setmenuViewSandwich2] = useState(false);
    const [menuViewSandwich3, setmenuViewSandwich3] = useState(false);

    const [menuViewBurger1, setmenuViewBurger1] = useState(false);
    const [menuViewBurger2, setmenuViewBurger2] = useState(false);
    const [menuViewBurger3, setmenuViewBurger3] = useState(false);

    //Breakfasts
    const [menuBreakfast1, setmenuBreakfast1] = useState("");
    const [priceBreakfast1, setpriceBreakfast1] = useState("")
    const [quantityBreakfast1, setquantityBreakfast1] = useState("")
    const [keyBreakfast1, setkeyBreakfast1] = useState("")

    const [menuBreakfast2, setmenuBreakfast2] = useState("");
    const [priceBreakfast2, setpriceBreakfast2] = useState("")
    const [quantityBreakfast2, setquantityBreakfast2] = useState("")
    const [keyBreakfast2, setkeyBreakfast2] = useState("")

    const [menuBreakfast3, setmenuBreakfast3] = useState("");
    const [priceBreakfast3, setpriceBreakfast3] = useState("")
    const [quantityBreakfast3, setquantityBreakfast3] = useState("")
    const [keyBreakfast3, setkeyBreakfast3] = useState("")

    //Sandwiches
    const [menuSandwich1, setmenuSandwich1] = useState("");
    const [priceSandwich1, setpriceSandwich1] = useState("")
    const [quantitySandwich1, setquantitySandwich1] = useState("")
    const [keySandwich1, setkeySandwich1] = useState("")

    const [menuSandwich2, setmenuSandwich2] = useState("");
    const [priceSandwich2, setpriceSandwich2] = useState("")
    const [quantitySandwich2, setquantitySandwich2] = useState("")
    const [keySandwich2, setkeySandwich2] = useState("")

    const [menuSandwich3, setmenuSandwich3] = useState("");
    const [priceSandwich3, setpriceSandwich3] = useState("")
    const [quantitySandwich3, setquantitySandwich3] = useState("")
    const [keySandwich3, setkeySandwich3] = useState("")

    //Burgers
    const [menuBurger1, setmenuBurger1] = useState("");
    const [priceBurger1, setpriceBurger1] = useState("")
    const [quantityBurger1, setquantityBurger1] = useState("")
    const [keyBurger1, setkeyBurger1] = useState("")

    const [menuBurger2, setmenuBurger2] = useState("");
    const [priceBurger2, setpriceBurger2] = useState("")
    const [quantityBurger2, setquantityBurger2] = useState("")
    const [keyBurger2, setkeyBurger2] = useState("")

    const [menuBurger3, setmenuBurger3] = useState("");
    const [priceBurger3, setpriceBurger3] = useState("")
    const [quantityBurger3, setquantityBurger3] = useState("")
    const [keyBurger3, setkeyBurger3] = useState("")
    
    let quantityHolder = 0;

    const allPrices = {
        finalPriceBreakfast1 : "",
        finalPriceBreakfast2 : "",
        finalPriceBreakfast3 : "",

        finalPriceBurger1 : "",
        finalPriceBurger2 : "",
        finalPriceBurger3 : "",

        finalPriceSandwich1 : "",
        finalPriceSandwich2 : "",
        finalPriceSandwich3 : "",
    };

    const emptyCartAlert = () =>{
        Alert.alert(
            "TheKerzner@UJ",
            "Your cart is empty",
            [
                {
                    text: "Ok",
                    onPress: () =>
                        navigation.navigate('Main')
                }
            ],
            { cancelable: false }
        );
    };


    useEffect(()=>{
        allPrices.finalPriceBreakfast1 = priceBreakfast1,
        allPrices.finalPriceBreakfast2 = priceBreakfast2,
        allPrices.finalPriceBreakfast3 = priceBreakfast3,

        allPrices.finalPriceBurger1 = priceBurger1,
        allPrices.finalPriceBurger2 = priceBurger2,
        allPrices.finalPriceBurger3 = priceBurger3,

        allPrices.finalPriceSandwich1 = priceSandwich1,
        allPrices.finalPriceSandwich2 = priceSandwich2,
        allPrices.finalPriceSandwich3 = priceSandwich3,

        loadItems()
        return() => console.log("Null menu data") //FIX THE MEMORY-LEAK IF YOU REMOVE THIS LINE
    })

    const loadItems = async () =>{
        //Breakfast1
        if(await AsyncStorage.getItem('Breakfasts01')){
            try{
                let itemData1 = await AsyncStorage.getItem('Breakfasts01')
                let parsedItem1 = JSON.parse(itemData1);
    
                setmenuBreakfast1(parsedItem1.menu);
                setpriceBreakfast1(parsedItem1.price);
                setquantityBreakfast1(parseInt(parsedItem1.quantity));
                setkeyBreakfast1(parsedItem1.key);

                setmenuViewBreakfast1(true);
            }catch(err){
                console.log(err);
            }
        }
        

        //Breakfast2
        if(await AsyncStorage.getItem('Breakfasts02')){
            try{
                let itemData2 = await AsyncStorage.getItem('Breakfasts02');
                let parsedItem2 = JSON.parse(itemData2);
    
                setmenuBreakfast2(parsedItem2.menu);
                setpriceBreakfast2(parsedItem2.price);
                setquantityBreakfast2(parseInt(parsedItem2.quantity));
                setkeyBreakfast2(parsedItem2.key);

                setmenuViewBreakfast2(true);

            }catch(err){
                console.log(err);
            }
        }
        

        //Breakfast3
        if(await AsyncStorage.getItem('Breakfasts03')){
            try{
                let itemData3 = await AsyncStorage.getItem('Breakfasts03');
                let parsedItem3 = JSON.parse(itemData3);
    
                setmenuBreakfast3(parsedItem3.menu);
                setpriceBreakfast3(parsedItem3.price);
                setquantityBreakfast3(parseInt(parsedItem3.quantity));
                setkeyBreakfast3(parsedItem3.key);

                setmenuViewBreakfast3(true)

                console.log(itemData3)
            }catch(err){
                console.log(err);
            }
        }
        

        //Sandwich1
        if(await AsyncStorage.getItem('Sandwiches01')){
            try{
                let itemData4 = await AsyncStorage.getItem('Sandwiches01');
                let parsedItem4 = JSON.parse(itemData4);
    
                setmenuSandwich1(parsedItem4.menu);
                setpriceSandwich1(parsedItem4.price);
                setquantitySandwich1(parseInt(parsedItem4.quantity));
                setkeySandwich1(parsedItem4.key);

                setmenuViewSandwich1(true)
            }catch(err){
                console.log(err);
            }
        }
        

        //Sandwich2
        if(await AsyncStorage.getItem('Sandwiches02')){
            try{
                let itemData5 = await AsyncStorage.getItem('Sandwiches02');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuSandwich2(parsedItem5.menu);
                setpriceSandwich2(parsedItem5.price);
                setquantitySandwich2(parseInt(parsedItem5.quantity));
                setkeySandwich2(parsedItem5.key);

                setmenuViewSandwich2(true)
            }catch(err){
                console.log(err);
            }
        }


        //Sandwich3
        if(await AsyncStorage.getItem('Sandwiches03')){
            try{
                let itemData5 = await AsyncStorage.getItem('Sandwiches03');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuSandwich3(parsedItem5.menu);
                setPrice3(parsedItem5.price);
                setquantitySandwich3(parseInt(parsedItem5.quantity));
                setkeySandwich3(parsedItem5.key);

                setmenuViewSandwich3(true)
            }catch(err){
                console.log(err);
            }
        }

        //Burger1
        if(await AsyncStorage.getItem('SpecialityBurgers01')){
            try{
                let itemData5 = await AsyncStorage.getItem('SpecialityBurgers01');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuBurger1(parsedItem5.menu);
                setpriceBurger1(parsedItem5.price);
                setquantityBurger1(parseInt(parsedItem5.quantity));
                setkeyBurger1(parsedItem5.key);

                setmenuViewBurger1(true)
            }catch(err){
                console.log(err);
            }
        }


        //Burger2
        if(await AsyncStorage.getItem('SpecialityBurgers02')){
            try{
                let itemData5 = await AsyncStorage.getItem('SpecialityBurgers02');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuBurger2(parsedItem5.menu);
                setpriceBurger2(parsedItem5.price);
                setquantityBurger2(parseInt(parsedItem5.quantity));
                setkeyBurger2(parsedItem5.key);

                setmenuViewBurger2(true)
            }catch(err){
                console.log(err);
            }
        }


        //Burger3
        if(await AsyncStorage.getItem('SpecialityBurgers03')){
            try{
                let itemData5 = await AsyncStorage.getItem('SpecialityBurgers03');
                let parsedItem5 = JSON.parse(itemData5);
    
                setmenuBurger3(parsedItem5.menu);
                setpriceBurger3(parsedItem5.price);
                setquantityBurger3(parseInt(parsedItem5.quantity));
                setkeyBurger3(parsedItem5.key);

                setmenuViewBurger3(true)
            }catch(err){
                console.log(err);
            }
        }
    }

    

    const decreaseBreakfast1Quantity = () =>{
        setquantityBreakfast1(quantityBreakfast1 - 1)
    }
    const increaseBreakfast1Quantity = () =>{
        setquantityBreakfast1(quantityBreakfast1 + 1)
    }

    const decreaseBreakfast2Quantity = () =>{
        setquantityBreakfast2(quantityBreakfast1 - 1)
    }
    const increaseBreakfast2Quantity = () =>{
        setquantityBreakfast2(quantityBreakfast1 + 1)
    }


    const clearCart = async() =>{
        await AsyncStorage.clear();
        emptyCartAlert()
    }
    
    const removeFromCart = async(key) =>{
        await AsyncStorage.removeItem(toString(key));

        setmenuViewBreakfast1(false);
        setmenuViewBreakfast2(false);
        setmenuViewBreakfast3(false);
    }

    const toCheckout = async() =>{
        if(menuViewBreakfast1 !== true & menuViewBreakfast2 !== true & menuViewBreakfast3 !== true & menuViewBurger1 !== true & menuViewBurger2 !== true & menuViewBurger3 !== true & menuSandwich1 !== true & menuViewSandwich2 !== true & menuViewSandwich3 !== true){
            console.log("empty cart");
            emptyCartAlert();
        }else{
            await AsyncStorage.setItem('allPrices', JSON.stringify(allPrices));
            navigation.navigate('Location')
        }
    }

    const goToMenu = () =>{
        navigation.navigate('Main');
    }

    return(
        <View>
            <View style={styles.headField}>
                <Text style={styles.menuTextHead}>
                    Cart
                </Text>
                <TouchableOpacity
                    style={styles.clearCartButton}
                    onPress={clearCart}
                >
                    <Text style={styles.clearCartText}>
                        Clear all
                    </Text>
                </TouchableOpacity>
            </View>
            
            <ScrollView>
                {menuViewBreakfast1 ?
                    <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuBreakfast1}
                            </Text>
                            <TouchableOpacity
                                style={styles.removeIcon}
                                onPress={(keyBreakfast1) => {
                                    removeFromCart(keyBreakfast1),
                                    setmenuViewBreakfast1()
                                }}
                            >
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceBreakfast1}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast1) =>decreaseBreakfast1Quantity(quantityBreakfast1)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityBreakfast1}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast1) =>increaseBreakfast1Quantity(quantityBreakfast1)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }
            



            
            {menuViewBreakfast2 ?
                <View style={styles.menuContainer}>
                    <View style={styles.menuNameField}>
                        <Text style={styles.menuName}>
                            {menuBreakfast2}
                        </Text>
                        <TouchableOpacity style={styles.removeIcon}>
                            <FontAwesome
                                name='close'
                                size={30}
                                color='#000000'
                                selectionColor='#FFFFFF'
                                accessibilityIgnoresInvertColors={true}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.menuIngredients}>
                            {/* {Added to cart } */}
                            Added to cart
                        </Text>
                    </View>

                    <View style={styles.priceField}>
                        <Text style={styles.menuPrice}>
                            {priceBreakfast2}
                        </Text>
                        <View style={styles.quantityField}>
                            <Text
                                style={styles.decrease}
                                onPress={(quantityBreakfast2) =>decreaseBreakfast2Quantity(quantityBreakfast2)}
                            >
                                -
                            </Text>
                            <Text
                                style={styles.quantityNumber}
                            >
                                {quantityBreakfast2}
                            </Text>
                            <Text
                                style={styles.increase}
                                onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                            >
                                +
                            </Text>
                        </View>
                    </View>
                </View>
                : null
            }
            



            {menuViewBreakfast3 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuBreakfast3}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceBreakfast3}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityBreakfast3}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }



            {menuViewSandwich1 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuSandwich1}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceSandwich2}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantitySandwich1}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }


            {menuViewSandwich2 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuSandwich2}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceSandwich2}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantitySandwich2}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }


            {menuViewSandwich3 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuSandwich3}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceSandwich3}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantitySandwich3}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }


            {menuViewBurger1 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuBurger1}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceBurger1}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityBurger1}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewBurger2 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuBurger2}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Added to cart } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceBurger2}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityBurger2}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }

            {menuViewBurger3 ?
                <View style={styles.menuContainer}>
                        <View style={styles.menuNameField}>
                            <Text style={styles.menuName}>
                                {menuBurger3}
                            </Text>
                            <TouchableOpacity style={styles.removeIcon}>
                                <FontAwesome
                                    name='close'
                                    size={30}
                                    color='#000000'
                                    selectionColor='#FFFFFF'
                                    accessibilityIgnoresInvertColors={true}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.menuIngredients}>
                                {/* {Add } */}
                                Added to cart 
                            </Text>
                        </View>

                        <View style={styles.priceField}>
                            <Text style={styles.menuPrice}>
                                {priceBurger3}
                            </Text>
                            <View style={styles.quantityField}>
                                <Text
                                    style={styles.decrease}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    -
                                </Text>
                                <Text
                                    style={styles.quantityNumber}
                                >
                                    {quantityBurger3}
                                </Text>
                                <Text
                                style={styles.increase}
                                    onPress={(quantityBreakfast2) =>increaseBreakfast2Quantity(quantityBreakfast2)}
                                >
                                    +
                                    </Text>
                            </View>
                        </View>
                    </View>
                    : null
                }
            </ScrollView>
            <View style={styles.addContainer}>
                <TouchableOpacity
                    style={styles.addWraper}
                    onPress={goToMenu}
                >
                    <Text style={styles.AddText}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.proceedButton}
                onPress={toCheckout}
            >
                <Text style={styles.proceedText}>
                    Proceed to checkout
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    headField:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10
    },
    menuTextHead:{
        fontSize:25,
        fontWeight:'bold',
    },
    clearCartText:{
        color:'#F2651C',
        marginVertical:10,
        fontSize:15
    },
    menuContainer:{
        marginVertical:5,
        marginHorizontal:10,
        backgroundColor:'#FFFFFF',
        borderWidth:0.5,
        borderColor:'#FFFFFF',
        borderRadius:20,
    },
    menuNameField:{
        flexDirection:'row'
    },
    menuName:{
        marginVertical:5,
        marginLeft:70,
        fontWeight:'bold',
        fontSize: 20,
        color: '#000000'
    },
    removeIcon:{
        marginHorizontal:20
    },
    menuIngredients:{
        alignSelf:'center',
        textAlign:'center',
        marginHorizontal:5,
        fontSize:15,
        color:"#5e5e5e",
    },
    menuPrice:{
        marginVertical:2,
        fontSize:20,
        color:'#000000',
        fontWeight:'bold',
        marginLeft:10
    },
    priceField:{
        marginHorizontal:10,
        flexDirection:'row',
        alignContent:'space-between',
    },
    quantityField:{
        flexDirection:'row',
        marginLeft:125,
        backgroundColor:'#F2651C',
        borderRadius:15,
        marginBottom:10
    },
    quantityNumber:{
        color:'#FFFFFF',
        fontSize:30,
        marginHorizontal:20,
        fontWeight:'bold',
    },
    decrease:{
        paddingHorizontal:5,
        color:'#FFFFFF',
        fontSize:25,
    },
    increase:{
        paddingHorizontal:5,
        color:'#FFFFFF',
        fontSize:25
    },
    confirmButton:{
        marginTop:50
    },
    proceedButton:{
        marginVertical:20,
        alignSelf:'center',
        marginTop:20,
        backgroundColor:'#F2651C',
        width:320,
        height:40,
        borderRadius:30,
        alignItems:'center'
    },
    proceedText:{
        marginVertical:7.5,
        color:'#FFFFFF',
        fontSize:15,
        fontWeight:'bold'
    },
    addContainer:{
        marginLeft:10
    },
    AddText:{
        color:'#F2651C',
        fontSize:15
    }
})

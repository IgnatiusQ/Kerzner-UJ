import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import * as LocationLibrary from 'expo-location';
import * as Permissions from 'expo-permissions';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {FontAwesome5} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core'

const Location = () => {
    const navigation = useNavigation();

    const [hasPermission, setHasPermission] = useState(true);

    const [deliveryOption, setDeliveryOption] = useState(0);
    const [paymentOption, setPaymentOption] = useState(0);

    const region = {
        latitude : "",
        longitude : "",
        latitudeDelta: 0.5,
        longitudeDelta: 0.5
    };


    var [priceVar, setPriceVar] = useState(320);

    //RADIO BUTTON PROPS
    var radio_delivery_props = [
        {label:  'Pick up', value: 0},
        {label: 'Delivery', value: 1}
    ];
    var radio_payment_props = [
        {label:
            <View style={styles.optionIconContainer}>
                <FontAwesome5
                    style={styles.optionIcon}
                    name='credit-card'
                    size={30}
                    color='#F2651C'
                    selectionColor='#FFFFFF'
                    accessibilityIgnoresInvertColors={true}
                />
                <Text style={styles.optionText}>
                    Card
                </Text>
            </View>,
            value: 0
        },

        {label:
            <View style={styles.optionIconContainer}>
                <FontAwesome5
                    style={styles.optionIcon}
                    name='wallet'
                    size={32}
                    color='#F2651C'
                    selectionColor='#FFFFFF'
                    accessibilityIgnoresInvertColors={true}
                />
                <Text style={styles.optionText}>
                    Cash
                </Text>
            </View>,
            value: 1
        },
    ];

    const updatePaymentOption = (value) =>{
        setPaymentOption(value);
        console.log("payment option:", paymentOption)
    }

    const updateDeliveryOption = (value) =>{
        setDeliveryOption(value);
        console.log("delivery option:", deliveryOption)
    };

    const fetchPrices = async() =>{
        let stringifyPrices = await AsyncStorage.getItem('allPrices');
        let parsedPrices = JSON.parse(stringifyPrices);

        let breakfastStringPrice1 = (parsedPrices.finalPriceBreakfast1).substring(1);
        let breakfastIntPrice1 = parseInt(breakfastStringPrice1);

        let breakfastStringPrice2 = (parsedPrices.finalPriceBreakfast2).substring(1);
        let breakfastIntPrice2 = parseInt(breakfastStringPrice2);

        let breakfastStringPrice3 = (parsedPrices.finalPriceBreakfast3).substring(1);
        let breakfastIntPrice3 = parseInt(breakfastStringPrice3);



        let sandwichStringPrice1 = (parsedPrices.finalPriceSandwich1).substring(1);
        let sandwichIntPrice1 = parseInt(sandwichStringPrice1);

        let sandwichStringPrice2 = (parsedPrices.finalPriceSandwich2).substring(1);
        let sandwichIntPrice2 = parseInt(sandwichStringPrice2);

        let sandwichStringPrice3 = (parsedPrices.finalPriceSandwich3).substring(1);
        let sandwichIntPrice3 = parseInt(sandwichStringPrice3);



        let burgerStringPrice1 = (parsedPrices.finalPriceBurger1).substring(1);
        let burgerIntPrice1 = parseInt(burgerStringPrice1);

        let burgerStringPrice2 = (parsedPrices.finalPriceBurger2).substring(1);
        let burgerIntPrice2 = parseInt(burgerStringPrice2);

        let burgerStringPrice3 = (parsedPrices.finalPriceBurger3).substring(1);
        let burgerIntPrice3 = parseInt(burgerStringPrice3);
        


        if(breakfastIntPrice1 > 0){
            priceVar = priceVar+breakfastIntPrice1
        }
        if(breakfastIntPrice2 > 0){
            priceVar = priceVar+breakfastIntPrice2
        }
        if(breakfastIntPrice3 > 0){
            priceVar = priceVar+breakfastIntPrice3
        }

        if(sandwichIntPrice1 > 0){
            priceVar = priceVar+sandwichIntPrice1
        }
        if(sandwichIntPrice2 > 0){
            priceVar = priceVar+sandwichIntPrice2
        }
        if(sandwichIntPrice3 > 0){
            priceVar = priceVar+sandwichIntPrice3
        }

        if(burgerIntPrice1 > 0){
            priceVar = priceVar+burgerIntPrice1
        }
        if(burgerIntPrice2 > 0){
            priceVar = priceVar+burgerIntPrice2
        }
        if(burgerIntPrice3 > 0){
            priceVar = priceVar+burgerIntPrice3
        }

        console.log("Total price : ", priceVar)
    }

    useEffect(() =>{
        fetchPrices();
        setPriceVar(priceVar)
    })

    const cardPaymentAlert = () =>{
        Alert.alert(
            "TheKerzner@UJ",
            "The card-payment option is currently unavailable",
            [
                {
                    text: "Ok",
                    onPress: () =>
                        null
                }
            ],
            { cancelable: false }
        );
    };
    
    const proceedToNav = () =>{
        Alert.alert(
            "TheKerzner@UJ",
            "Your order has been successfully recieved. Proceed to navigation options",
            [
                {
                    text: "No, thank you",
                    onPress: () =>
                        navigation.navigate('Main')
                },
                {
                    text: "Proceed",
                    onPress: () =>
                        navigation.navigate("PickupOptions")
                }
            ],
            { cancelable: false }
        );
    };

    const clearOrders = async() =>{
        await AsyncStorage.clear();
    };

    const successOrder = () =>{
        Alert.alert(
            "TheKerzner@UJ",
            "Your order has been successfully recieved and you will be notified when it arrives.",
            [
                {
                    text: "Return to menu",
                    onPress: () =>
                        navigation.navigate('Main'),
                        clearOrders
                }
            ],
            { cancelable: false }
        );
    };

    const fetchLocation = async() =>{
        let getLocationPermission = await LocationLibrary.requestPermissionsAsync();
        let locationStatus = await Permissions.getAsync(Permissions.LOCATION);
        if(locationStatus.status === 'granted'){
            console.log('location granted')
        }

        let location = await LocationLibrary.getCurrentPositionAsync({enableHighAccuracy: true});
        region.latitude = location.coords.latitude;
        region.longitude = location.coords.longitude

        console.log('latitude : ', region.latitude,"\n", 'longitude : ', region.longitude,"\n");
    }

    const finishOrder = () =>{
        if(paymentOption == 0){
            console.log('card payment');
            cardPaymentAlert();
        }else{
            console.log('cash payment')

            if(deliveryOption == 0){
                console.log('pick up');
                proceedToNav();
            }else{
                console.log('Delivery');
                fetchLocation();
                successOrder();
            }
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <View style={styles.checkOutTextContainer}>
                    <Text style={styles.checkoutText}>
                        Checkout
                    </Text>
                </View>

                <View style={styles.methodContainer}>
                    <Text style={styles.methodText}>
                        Delivery method
                    </Text>
                </View>
                <View style={styles.optionsContainer}>
                    <RadioForm
                        style={styles.radioOptions}
                        radio_props={radio_delivery_props}
                        initial={0}
                        onPress={(value) => {updateDeliveryOption(value)}}
                    />
                </View>
                <View style={styles.methodContainer}>
                    <Text style={styles.methodText}>
                        Payment method
                    </Text>
                </View>
                <View style={styles.optionsContainer2}>
                    <RadioForm
                        style={styles.radioOptions}
                        radio_props={radio_payment_props}
                        initial={0}
                        onPress={(value) => {updatePaymentOption(value)}}
                    />
                </View>
            </ScrollView>
            <View style={styles.bottomPart}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>
                        Total
                    </Text>
                    <Text style={styles.totalNumber}>
                        R {priceVar}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.orderButton}
                    onPress={finishOrder}
                >
                    <Text style={styles.orderText}>
                        Order
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Location;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f0f0f0'
    },
    content:{
        marginHorizontal:20,
        marginBottom:20
    },
    checkOutTextContainer:{
        borderBottomColor: '#F2651C',
        borderBottomWidth: 0.5
    },
    checkoutText:{
        fontSize:50,
        fontWeight:'bold',
        marginVertical:10,
    },
    methodText:{
        fontSize:20
    },
    methodContainer:{
        marginVertical:10
    },
    optionsContainer:{
        backgroundColor:'#FFFFFF',
        borderRadius:20
    },
    optionsContainer2:{
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        marginBottom:20
    },
    radioOptions:{
        marginHorizontal:15,
        marginVertical:15
    },
    optionIconContainer:{
        flexDirection:'row',
    },
    optionText:{
        fontSize:15,
        marginLeft:10,
        fontWeight:'bold'
    },
    bottomPart:{
        backgroundColor:'#FFFFFF'
    },
    totalContainer:{
        flexDirection:'row',
        marginHorizontal:20,
        borderBottomColor:'#F2651C',
        borderBottomWidth:0.5,
    },
    totalText:{
        fontSize:20
    },
    totalNumber:{
        fontSize:20,
        fontWeight:'bold',
        marginVertical:5,
        marginLeft:140
    },
    orderButton:{
        marginVertical:40,
        alignSelf:'center',
        backgroundColor:'#F2651C',
        width:320,
        height:40,
        borderRadius:30,
        alignItems:'center'
    },
    orderText:{
        marginVertical:7.5,
        color:'#FFFFFF',
        fontSize:15,
        fontWeight:'bold'
    }
})
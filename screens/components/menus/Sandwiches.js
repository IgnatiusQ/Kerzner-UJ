import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'

const Sandwiches = () => {
    // const Chicken_Haloumi_Quesadilla = () =>{
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Text style={styles.menuTextHead}>
                        Menu
                    </Text>
                    <Image
                        style={styles.image}
                        source={require('../../../image_props/mahbub-majid-3eFXM5BDaI4-unsplash.jpg')}
                    />
                </View>
                <ScrollView>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Chicken {"&"} Haloumi Quesadilla</Text>
                        <Text style={styles.menuIngredients}>Served with Choice of Side Salad or STH House Fries</Text>
                        <Text style={styles.menuPrice}>R 70.00</Text>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Roasted Root Vegetable Tortilla Wrap</Text>
                        <Text style={styles.menuIngredients}>Served with Choice of Side Salad or STH House Fries</Text>
                        <Text style={styles.menuExtra}>Delicately smothered in Hummus {"&"} Tzatziki</Text>
                        <Text style={styles.menuPrice}>R 65.00</Text>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Slow Braised Chicken Tramazzini</Text>
                        <Text style={styles.menuIngredients}>Served with Choice of Side Salad or STH House Fries</Text>
                        <Text style={styles.menuExtra}>Delicately smothered in Hummus {"&"} Tzatziki</Text>
                        <Text style={styles.menuPrice}>R 72.00</Text>
                    </View>
                </ScrollView>
            </View>
        )
    // }
}
export default Sandwiches

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

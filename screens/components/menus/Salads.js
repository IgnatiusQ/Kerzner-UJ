import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'

const Salads = (navigation) => {
    // const Garden_Salad  = () =>{
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Text style={styles.menuTextHead}>
                        Menu
                    </Text>
                    <Image
                        style={styles.image}
                        source={require('../../../image_props/mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg')}
                    />
                </View>
                <ScrollView>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Garden Salad</Text>
                        <Text style={styles.menuIngredients}>A fresh seasonal salad with Garden leaves, English cucumbers, heirloom Tomatoes, Wheat croutons, Black Kalamata Olives {"&"} Greek Feta Cheese, Honey Mustard Dressing</Text>
                        <Text style={styles.menuExtra}>Added Extras</Text>
                        <Text style={styles.menuExtra}>
                            Chicken Strips   R 12.00{"\n"}
                            Salmon              R 16.00{"\n"}
                            Avocado            R 12.00 *
                        </Text>
                        <Text style={styles.menuPrice}>R 65.00</Text>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Pasta Salad</Text>
                        <Text style={styles.menuIngredients}>A pasta salad with Root Veg, heirloom Tomatoes, Toasted Seeds, Black Kalamata Olives {"&"} Greek Feta Cheese</Text>
                        <Text style={styles.menuPrice}>R 70.00</Text>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Haloumi {"&"} Peppadew Salad </Text>
                        <Text style={styles.menuIngredients}>Bar Grilled Haloumi with seasonal Garden Leaves, heirloom Tomatoes, Toasted Seeds, Black Kalamata Olives & Greek Feta Cheese {"&"} Honey Mustard Dressing </Text>
                        <Text style={styles.menuPrice}>R 90.00</Text>
                    </View>
                </ScrollView>
            </View>
        )
    // }
}
export default Salads

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

import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'

export const Breakfasts = (navigation) => {
    // const Waterford_Breakfast = () =>{
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Text style={styles.menuTextHead}>
                        Menu
                    </Text>
                    <Image
                        style={styles.image}
                        source={require('../../../image_props/nathan-dumlao-2VSTCRx8ccY-unsplash.jpg')}
                    />
                </View>
                <ScrollView>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Waterford Breakfast</Text>
                        <Text style={styles.menuIngredients}>Beef Sausage, Bacon, Grilled Tomato, Field Mushroom, Egg {"&"} Toast</Text>
                        <Text style={styles.menuExtra}>(Served w/ your choice of toast) Brown/white/Rye</Text>
                        <Text style={styles.menuPrice}>R 85.00</Text>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Beans With Hashbrown</Text>
                        <Text style={styles.menuIngredients}>Seasoned beans served with Hashbrown</Text>
                        <Text style={styles.menuPrice}>R 65.00</Text>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Homemade Waffle</Text>
                        <Text style={styles.menuIngredients}>Maple syrup</Text>
                        <Text style={styles.menuExtra}>(Served in with Berry Compote with/bacon)</Text>
                        <Text style={styles.menuPrice}>R 65.00</Text>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Breakfast Fruit Bowl</Text>
                        <Text style={styles.menuIngredients}>Seasonal fruit selection</Text>
                        <Text style={styles.menuExtra}>(Served with nuts {"&"} Bulgarian Yoghurt)</Text>
                        <Text style={styles.menuExtra}>Added Extras</Text>
                        <Text style={styles.menuExtra}>Muesli       R 8.00</Text>
                        <Text style={styles.menuPrice}>R 72.00</Text>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Oats</Text>
                        <Text style={styles.menuIngredients}>Freshly prepared Oats served with honey {"&"} warm milk</Text>
                        <Text style={styles.menuExtra}>Added Extras</Text>
                        <Text style={styles.menuExtra}>Fruit       R 10.00</Text>
                        <Text style={styles.menuPrice}>R 55.00</Text>
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

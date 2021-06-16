import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'

const SignaturePizzas = () => {
    // const BBQ_Chicken_Mushroom_Pizza = () =>{
        return (
            <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Text style={styles.menuTextHead}>
                    Menu
                </Text>
                <Image
                    style={styles.image}
                    source={require('../../../image_props/emmanuel-zua-LxlMjePM7rQ-unsplash.jpg')}
                />
            </View>
                <ScrollView>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>BBQ Chicken {"&"} Mushroom Pizza </Text>
                        <Text style={styles.menuIngredients}>A freshly made pizza made with mozzarella cheese, Tangy Tomato, BBQ Chicken, Mushroom {"&"} Peppers</Text>
                        <Text style={styles.menuPrice}>R 92.00</Text>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Four Seasons Pizza</Text>
                        <Text style={styles.menuIngredients}>A freshly prepared pizza made with Mozzarella Cheese, Spinach, Feta, Mushrooms {"&"} Olives</Text>
                        <Text style={styles.menuPrice}>R 78.00</Text>
                    </View>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuName}>Meat Lovers Delight</Text>
                        <Text style={styles.menuIngredients}>A freshly prepared pizza made with Mozzarella Cheese, Salami, Pork Ribs, Feta, Mushrooms {"&"} Bacon Jam</Text>
                        <Text style={styles.menuPrice}>R 105.00</Text>
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

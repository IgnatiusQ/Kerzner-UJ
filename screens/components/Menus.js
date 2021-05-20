import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'


export const Breakfast_Thumb = () =>{
    return(
        <ImageBackground
            style={styles.imageThumbnail}
            source={require('../../image_props/nathan-dumlao-2VSTCRx8ccY-unsplash.jpg')}
            imageStyle={{borderRadius:20}}
        >
            <View style={styles.imageThumbTextContainer}>
                <Text style={styles.imageThumbText}>
                    Breakfast
                </Text>
            </View>
        </ImageBackground>
    )
}


export const Breakfasts = () => {
    // const Waterford_Breakfast = () =>{
        return (
            <View style={styles.menuContainer}>
                <Text style={styles.menuName}>Waterford Breakfast</Text>
                <Text style={styles.menuPrice}>R 85.00</Text>
                <Text style={styles.menuIngredients}>Beef Sausage, Bacon, Grilled Tomato, Field Mushroom, Egg {"&"} Toast</Text>
                <Text style={styles.menuExtra}>(Served w/ your choice of toast) Brown/white/Rye</Text>
            </View>
        )
    // }
}
/////////////////////////////////////////////////////////////////////////////////

export const Salads_Thumb = () =>{
    return(
        <ImageBackground
            style={styles.imageThumbnail}
            source={require('../../image_props/mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg')}
            imageStyle={{borderRadius:20}}
        >
            <View style={styles.imageThumbTextContainer}>
                <Text style={styles.imageThumbText}>
                    Salads
                </Text>
            </View>
        </ImageBackground>
    )
}

export const Salads = () => {
    // const Garden_Salad  = () =>{
        return (
            <View style={styles.menuContainer}>
                <Text style={styles.menuName}>Garden Salad</Text>
                <Text style={styles.menuPrice}>R R 65.00</Text>
                <Text style={styles.menuExtra}>Added Extras</Text>
                <Text style={styles.menuExtra}>
                    Chicken Strips   R 12.00{"\n"}
                    Salmon              R 16.00{"\n"}
                    Avocado            R 12.00 *
                </Text>
            </View>
        )
    // }
}
/////////////////////////////////////////////////////////////////////////////////

export const SpecialityBurgers_Thumb = () =>{
    return(
        <ImageBackground
            style={styles.imageThumbnail}
            source={require('../../image_props/mahbub-majid-ijiBzdaxDx8-unsplash.jpg')}
            imageStyle={{borderRadius:20}}
        >
            <View style={styles.imageThumbTextContainer}>
                <Text style={styles.imageThumbText}>
                    Speciality Burgers
                </Text>
            </View>
        </ImageBackground>
    )
}

export const SpecialtyBurgers = () => {
    // const STH_Beef_Burger = () =>{
        return (
            <View style={styles.menuContainer}>
                <Text style={styles.menuName}>STH Beef Burger</Text>
                <Text style={styles.menuPrice}>R 105.00</Text>
                <Text style={styles.menuIngredients}>brown mushroom and mozzarella cheese, Caramelized Onion, Lettuce, Tomato {"\n"} Pickles served on a Sesame seed roll</Text>
                <Text style={styles.menuExtra}>Served with Choice of Side Salad or STH House Fries</Text>
            </View>
        )
    // }
}
/////////////////////////////////////////////////////////////////////////////////

export const Sandwitches_Thumb = () =>{
    return(
        <ImageBackground
            style={styles.imageThumbnail}
            source={require('../../image_props/mahbub-majid-3eFXM5BDaI4-unsplash.jpg')}
            imageStyle={{borderRadius:20}}
        >
            <View style={styles.imageThumbTextContainer}>
                <Text style={styles.imageThumbText}>
                    Sandwiches
                </Text>
            </View>
        </ImageBackground>
    )
}

export const Sandwiches = () => {
    // const Chicken_Haloumi_Quesadilla = () =>{
        return (
            <View style={styles.menuContainer}>
                <Text style={styles.menuName}>Chicken {"&"} Haloumi Quesadilla </Text>
                <Text style={styles.menuPrice}>R 70.00</Text>
                <Text style={styles.menuIngredients}>Served with Choice of Side Salad or STH House Fries</Text>
            </View>
        )
    // }
}
/////////////////////////////////////////////////////////////////////////////////

export const HotMeals_Thumb = () =>{
    return(
        <ImageBackground
            style={styles.imageThumbnail}
            source={require('../../image_props/alex-munsell-auIbTAcSH6E-unsplash.jpg')}
            imageStyle={{borderRadius:20}}
        >
            <View style={styles.imageThumbTextContainer}>
                <Text style={styles.imageThumbText}>
                    HotMeals
                </Text>
            </View>
        </ImageBackground>
    )
}

export const HotMeals = () => {
    // const Creamed_Beef_Pasta = () =>{
        return (
            <View style={styles.menuContainer}>
                <Text style={styles.menuName}>Creamed Beef Pasta </Text>
                <Text style={styles.menuPrice}>R 110.00</Text>
                <Text style={styles.menuIngredients}>Layered Beef with Provençale style sauce, cream {"&"} Pecorino Cheese </Text>
            </View>
        )
    // }
}
/////////////////////////////////////////////////////////////////////////////////

export const SignaturePizzas_Thumb = () =>{
    return(
        <ImageBackground
            style={styles.imageThumbnail}
            imageStyle={{borderRadius:20}}
            source={require('../../image_props/emmanuel-zua-LxlMjePM7rQ-unsplash.jpg')}
        >
            <View style={styles.imageThumbTextContainer}>
                <Text style={styles.imageThumbText}>
                    Signature Pizzas
                </Text>
            </View>
        </ImageBackground>
    )
}

export const SignaturePizzas = () => {
    // const BBQ_Chicken_Mushroom_Pizza = () =>{
        return (
            <View style={styles.menuContainer}>
                <Text style={styles.menuName}>BBQ Chicken {"&"} Mushroom Pizza </Text>
                <Text style={styles.menuPrice}>R 92.00</Text>
                <Text style={styles.menuIngredients}>A freshly made pizza made with mozzarella cheese, Tangy Tomato, BBQ Chicken, Mushroom {"&"} Peppers</Text>
            </View>
        )
    // }
}
//////////////////////////////////////////////////////////////////////////////////////////

export const Omelets_Thumb = () =>{
    return(
        <ImageBackground
            style={styles.imageThumbnail}
            source={require('../../image_props/louis-hansel-shotsoflouis-V3frlG3Hgqc-unsplash.jpg')}
            imageStyle={{borderRadius:20}}
        >
            <View style={styles.imageThumbTextContainer}>
                <Text style={styles.imageThumbText}>
                    Omelets
                </Text>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    imageThumbnail:{
        height:150,
        width:340,
        marginHorizontal:10,
        marginVertical:10,
    },
    imageThumbTextContainer:{
        marginTop:120,
        marginHorizontal:15,
    },
    imageThumbText:{
        color:'#FFFFFF',
        fontSize:15,
        fontWeight:'bold',
    },

    menuContainer:{
        marginVertical:5,
        marginHorizontal:10,
        alignContent:'center',
        backgroundColor:'#f0f0f0',
        borderWidth:0.5,
        borderColor:'#F2651C',
        borderRadius:20,
    },
    menuName:{
        marginVertical:5,
        marginHorizontal:5,
        alignSelf:'center',
        textAlign:'center',
        fontSize: 25,
        fontWeight:'bold',
        color: '#5e5e5e'
    },
    menuPrice:{
        marginVertical:2,
        marginHorizontal:5,
        alignSelf:'center',
        fontSize:20,
        fontWeight:'bold',
    },
    menuIngredients:{
        alignSelf:'center',
        textAlign:'center',
        marginHorizontal:5,
        fontSize:15,
        color:"#5e5e5e",
        fontWeight:'bold'
    },
    menuExtra:{
        alignSelf:'center',
        fontSize:10,
        marginHorizontal:5,
        color:'#5e5e5e',
        marginBottom:5,
        marginHorizontal:5,
    }
})
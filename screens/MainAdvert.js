import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'

//INSTALLED LIBRARIES
import { SliderBox } from "react-native-image-slider-box";

const MainAdvert = ({navigation}) => {

    const images = [
        require('../image_props/pablo-merchan-montes-0nT08Z-MhiE-unsplash.jpg'),
        require('../image_props/andres-rodriguez-So4EHYeShUM-unsplash.jpg'),
        require('../image_props/nishaan-ahmed-Mh087eDe_qA-unsplash.jpg'),
    ];

    const advertHandler = () =>{
        null
    }

    return (
        <View style={styles.advertField}>
            <SliderBox
                style={styles.advertPicture}
                images={images}
                dotColor='#F2651C'
                paginationBoxVerticalPadding={5}
                autoplay={true}
                autoplayInterval={3000}
                circleLoop={true}
                onCurrentImagePressed={index => advertHandler}
            />
        </View>
    )
}

export default MainAdvert

const styles = StyleSheet.create({
    advertField:{
        marginLeft:10,
        marginTop:10,
        backgroundColor:'#FFFFFF'
    },
    advertPicture:{
        width:340,
        height:120,
        borderColor:'#000000',
        borderWidth:1,
        backgroundColor:'#FFFFFF'
    }
})
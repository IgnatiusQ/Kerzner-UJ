import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, View, Dimensions, Button, StatusBar, ScrollView, Image, StyleSheet } from 'react-native'
import SignUp from './SignUp'

const { width, height } = Dimensions.get('window');
let imageHeight = height - 80;

const GetStarted = ({navigation}) => {

    useEffect(() =>{
        const numOfBackground = 3;
        let scrollValue = 0, scrolled = 0;
        setInterval(function(){
            scrolled++;
            if(scrolled < numOfBackground)
            scrollValue = scrollValue + width;
        else{
            scrollValue = 0;
            scrolled = 0
        }
          _scrollView.scrollTo({x: scrollValue}) 
        }, 3000);
    })

    const goToSignUp = () =>{
        navigation.navigate(SignUp);
    }
    
    return (
        <View>
            <StatusBar
                animated={true}
                backgroundColor='#212121'
                networkActivityIndicatorVisible={true}
                animated={true}
            />
            <ScrollView
                style={styles.imageContainer}
                ref={(scrollView) => { _scrollView = scrollView; }}
                horizontal={true} pagingEnabled={true} 
                >
                <Image source={require('../image_props/andres-rodriguez-mKP2bl0R0pk-unsplash.jpg')} style={styles.image} />
                <Image source={require('../image_props/andres-rodriguez-So4EHYeShUM-unsplash.jpg')} style={styles.image} />
                <Image source={require('../image_props/nishaan-ahmed-Mh087eDe_qA-unsplash.jpg')} style={styles.image} />
            </ScrollView>

            <View style={{position: 'absolute'}}>
                <Text style={styles.slogan}>
                    Food for{"\n"}Everyone
                </Text>
            </View>
            
            <View>
                <TouchableOpacity
                        style={styles.getStartedButton}
                        onPress={goToSignUp}
                        hitSlop={{ left: 20, top: 20, right: 20, bottom: 20 }}
                >
                    <Text style={styles.getStartedText}>
                        Get started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    imageContainer:{
        height: imageHeight,
    },
    image:{
        width:width,
        height:imageHeight,
    },
    slogan:{
        alignSelf:'flex-start',
        marginLeft:10,
        marginTop:20,
        color:'#F2651C',
        fontSize:60,
        fontWeight:'bold',
    },
    getStartedButton:{
        position:'relative',
        backgroundColor:'transparent',
        width:width,
        backgroundColor:'#F2651C',
        height:60,
        borderBottomColor:'#F2651C',
        borderBottomWidth:1,
        borderTopColor:'#F2651C',
        borderTopWidth:1,
    },
    getStartedText:{
        fontSize:20,
        color:'#FFFFFF',
        alignSelf:'center',
        marginVertical:15,
    },
})













// const { width, height } = Dimensions.get('window');

// const GetStarted = ({navigation}) => {

//     const images = [
//         require('../image_props/pablo-merchan-montes-0nT08Z-MhiE-unsplash.jpg'),
//         require('../image_props/andres-rodriguez-So4EHYeShUM-unsplash.jpg'),
//         require('../image_props/nishaan-ahmed-Mh087eDe_qA-unsplash.jpg'),
//     ];

//     const BtnClick = () => {
//         Alert.alert('Get started')
//     };

//     return(
//             <View style={styles.container}>
//                 <SliderBox
//                     images={images}
//                     paginationBoxVerticalPadding={5}
//                     autoplay={true}
//                     autoplayInterval={3000}
//                     circleLoop={true}
//                 />
//                 <View style={styles.darlayer} />
//                 <View style={styles.textContainer}>
//                     <Text style={styles.text}>
//                         Food For Everyone
//                     </Text>
//                 </View>

//                 <View style={styles.logoContainer}>
//                     <Text style={styles.text}>
//                         TheKerzner@UJ
//                     </Text>
//                 </View>

//                 <View style={styles.button}>
//                     <Button
//                         title='Get Started'
//                         onPress={BtnClick}
//                     />
//                 </View>
//             </View>
//     )
// }
// export default GetStarted

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     slide: {
//         justifyContent: 'center',
//         alignContent: 'center',
//         resizeMode: 'cover',
//         height: 500,

//     },
//     image: {
//         width: 50,
//         height: 500,
//     },
//     textContainer: {
//         width: 170,
//         position: 'absolute',
//         top: 65,
//         left: 25,
//         alignItems: 'center',
//         justifyContent: 'flex-start'
//     },
//     logoContainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: 320,
//         position: 'absolute',
//         alignSelf: 'center',
//         top: 400

//     },
//     text: {
//         fontFamily: 'Merriweather-Bold',
//         color: '#ffffff',
//         fontSize: 35,
//         fontWeight: '100'
//     },
//     button: {
//         alignContent: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     darlayer: {
//         position: 'absolute',
//         top: 0,
//         right: 0,
//         left: 0,
//         bottom: 0,
//         backgroundColor: 'black',
//         opacity: 0.4
//     }

// });











// import React from 'react'
// import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, Dimensions} from 'react-native'
// import SignUp from './SignUp'
// //INSTALLED LIBRARIES
// import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const GetStarted = ({navigation}) => {
//     return (
//         <View style={styles.container}>
//             <StatusBar
//                 animated={true}
//                 backgroundColor='#F2651C'
//                 networkActivityIndicatorVisible={true}
//                 animated={true}
//             />
//             <MaterialIcons
//                 style={styles.logo}
//                 name='chef-hat'
//                 size={130}
//                 color='#FFFFFF'
//             />
//             <Text style={styles.slogan}>
//                 Food for{"\n"}Everyone
//             </Text>
//             <TouchableOpacity
//                 style={styles.getStartedButton}
//                 onPress={()=>navigation.navigate(SignUp)}
//             >
//                 <Text style={styles.getStartedText}>
//                     Get started
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default GetStarted

// const styles = StyleSheet.create({
//     container:{
//         width: '100%',
//         alignItems: 'center',
//         height:'100%',
//         backgroundColor:'#F2651C',
//     },
//     logo:{
//         alignSelf:'flex-start',
//         marginTop:30,
//         marginLeft:10,
//     },
//     slogan:{
//         alignSelf:'flex-start',
//         marginLeft:30,
//         color:'#FFFFFF',
//         fontSize:60,
//         fontWeight:'bold',
//     },
//     getStartedButton:{
//         marginTop:170,
//         backgroundColor:'#FFFFFF',
//         width:'100%',
//         height:60,
//     },
//     getStartedText:{
//         fontSize:20,
//         color:'#F2651C',
//         alignSelf:'center',
//         marginVertical:15,
//     },
// })

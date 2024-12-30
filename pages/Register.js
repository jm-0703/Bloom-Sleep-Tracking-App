import React, {useEffect} from "react";
import { SafeAreaView, View, Text, StyleSheet, Image,TextInput, TouchableOpacity } from "react-native";
import {Svg,Path} from 'react-native-svg'

const Register= ({navigation}) =>{
    const LoginClick= () =>{
        navigation.replace('Login')
    }
    return(
        <SafeAreaView style={styles.Container} >
            <View style={styles.LogoContainer}>
                <Image style={styles.ImageStyle} source={require('../assets/images/logo.png')} />
                <View style={styles.TextContainer}>
                    <Text style={styles.BloomStyle}>Bloom</Text>
                    <Text style={styles.DesStyle}>Sleep Tracking</Text>
                </View>
                <Image style={styles.StarsImage} source={require('../assets/images/Stars.png')}/>
            </View>
            <View style={styles.RegContainer}>
                <Text style={styles.regtext}>Registration</Text>
            </View>
            
            <View style={styles.GoogleContainer}> 
                <TouchableOpacity style={styles.button}>
                    <View style={styles.iconWrapper}>
                        <Svg width="48" height="48" viewBox="0 0 48 48">
                        <Path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                        <Path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                        <Path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                        <Path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                        </Svg>
                    </View>
                    <Text style={styles.text}>Sign up with Google</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={LoginClick}>
                <Text style={styles.Btlbutton}>{'\u00A0'}{'\u00A0'}{'\u00A0'}Back to Login{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
            </TouchableOpacity>
            
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#242F42',
        display:'flex',
        alignItems:'center',
        
    },
    LogoContainer:{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        height:'15%',
    },
    ImageStyle:{
        display:'flex',
        width:100,
        height:100
    },
    TextContainer:{
        width:'50%',
        justifyContent:'center',
        marginLeft:7,
    },
    BloomStyle:{
        fontFamily:'Josefin Slab',
        fontWeight:'bold',
        fontSize:18,
        color:'#ffffff'
    },
    DesStyle:{
        fontFamily:'Josefin Slab',
        fontSize:13,
        color:'#ffffff'
    },
    StarsImage:{
        display:'flex',
        justifyContent:'flex-end'
    },
    RegContainer:{
        width:'70%',
        height:'30%',
        alignItems:'center',
        justifyContent:'center'
    },
    regtext:{
        fontFamily:'Josefin Slab',
        fontWeight:'bold',
        fontSize:45,
        color: '#ffffff'
    },
    GoogleContainer:{
        justifyContent:'center',
        display:'flex',
        alignItems:'center',
        marginBottom:16
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7E9BC',
        padding: 10,
        borderRadius: 19,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    iconWrapper: {
        marginRight: 10,
    },
    text: {
        fontSize: 18,
        fontFamily:'Josefin Slab',
        fontWeight:'bold',
        color: '#242F42',
    },
    Btlbutton:{
        fontFamily:'Josefin Slab',
        fontWeight:'bold',
        textDecorationLine:'underline',
        fontSize:17,
        color:'#ffffff'
    }

})

export default Register;
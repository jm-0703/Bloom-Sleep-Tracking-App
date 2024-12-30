import React, {useEffect} from "react";
import { SafeAreaView, View, Text, StyleSheet, Image,TextInput, TouchableOpacity } from "react-native";

const Login = ({navigation})=>{
    const loginClick =() =>{
        navigation.replace('Main');
    }

    const RegisterClick = () =>{
        navigation.replace('Register');
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

            <View style={styles.LoginContainer}>
                <Text style={styles.LoginText}>Login</Text>

            </View>
            <View style={styles.LoginContainer}>
                <Text style={styles.UserText}>Username</Text>
                <TextInput style={styles.UserInput} 
                    placeholder="Username"
                />
            </View>
            <View style={styles.LoginContainer}>
                <Text style={styles.PasswordText}>Password</Text>
                <TextInput style={styles.PasswordInput}
                    secureTextEntry={true}
                    placeholder="Password"
                />
            </View>

            <TouchableOpacity style={styles.LoginButton} onPress={loginClick}>
                <Text style={styles.LoginText2}>Login</Text>

            </TouchableOpacity>
            <Text style={styles.NextText}>Need an Account?</Text>
            <TouchableOpacity onPress={RegisterClick}>
                <Text style={styles.RegText}>{'\u00A0'}{'\u00A0'}{'\u00A0'}Register{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
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
        alignItems:'center'
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
    LoginContainer:{
        
        justifyContent:'center',
        width:'100%',
        height:'18%',
        alignItems:'center'
    },
    LoginText:{
        fontFamily:'Josefin Slab',
        fontSize:45,
        fontWeight:'bold',
        color:'#ffffff'
    },
    UserText:{
        fontFamily:'Josefin Slab',
        fontSize:23,
        width:'75%',
        fontWeight:'bold',
        color:'#ffffff',
        marginBottom:7
    },
    UserInput:{
        width:'75%',
        height:'37%',
        backgroundColor:'#EFE1B2',
        borderRadius:10,
        paddingLeft:10,
    },
    PasswordText:{
        fontFamily:'Josefin Slab',
        fontSize:23,
        fontWeight:'bold',
        color:'#ffffff',
        marginBottom:7,
        width:'75%'


    },
    PasswordInput:{
        width:'75%',
        height:'37%',
        backgroundColor:'#EFE1B2',
        borderRadius:10,
        paddingLeft:10
    },
    LoginButton:{
        backgroundColor:'#EFE1B2',
        width:'33%',
        height:47,
        borderRadius:11,
        marginTop:14,
        alignItems:'center',
        justifyContent:'center'
    },
    LoginText2:{
        fontFamily:'Josefin Slab',
        fontSize:22,
        fontWeight:'bold'
    },
    NextText:{
        fontFamily:'Josefin Slab',
        fontSize:17,
        fontWeight:'bold',
        color:'#ffffff',
        marginTop:10
    },
    RegText:{
        fontFamily:'Josefin Slab',
        fontSize:17,
        fontWeight:'bold',
        color:'#ffffff',
        marginTop:10,
        textDecorationLine:'underline'

    }









})
export default Login;
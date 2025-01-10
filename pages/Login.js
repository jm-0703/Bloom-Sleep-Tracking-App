import React, {useEffect,useState} from "react";
import { SafeAreaView, View, Text, StyleSheet, Image,TextInput, TouchableOpacity,Linking } from "react-native";
import {Svg,Path} from 'react-native-svg';
import Config from "react-native-config";



const Login = ({navigation})=>{
    const googlOAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=${Config.REACT_NATIVE_GOOGLE_CLIENT_ID}&redirect_uri=${Config.REACT_NATIVE_REDIRECT_URI}`;
    console.log(googlOAuthUrl);

    const handleOpenURL = (event) => {
        const url = event.url;
        console.log("Redirected URL:", url);
    
        if (url.startsWith(Config.REACT_NATIVE_REDIRECT_URI)) {
            const codeMatch = url.match(/code=([^&]*)/);
            if (codeMatch) {
                const code = codeMatch[1];
                console.log('Authorization Code:', code);
    
            // 추가적으로 백엔드로 이 코드를 보내서 액세스 토큰을 받아야 함
            Alert.alert('로그인 성공', `Authorization Code: ${code}`);
        } else {
            console.log('Authorization code not found.');
            Alert.alert('로그인 실패', 'Authorization code not found.');
        }
    }
    };
    
    const signInWithGoogle = async () => {
        try {
            // 디바이스의 기본 브라우저로 Google OAuth URL 열기
            await Linking.openURL(googlOAuthUrl);
    
            // 리디렉션 URL 처리 리스너 등록
            Linking.addEventListener('url', handleOpenURL);
        } catch (error) {
            console.error('Error opening URL:', error);
        }
    };
    
    useEffect(() => {
        // 컴포넌트가 언마운트될 때 리스너 제거
        return () => Linking.removeEventListener('url', handleOpenURL);
    }, []);
    
    const loginClick =() =>{
        //navigation.replace('GoogleOAuth');
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
            {/*
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
            */}
            

            <View style={styles.GoogleContainer}> 
                <TouchableOpacity style={styles.button} onPress={signInWithGoogle}>
                    <View style={styles.iconWrapper}>
                        <Svg width="48" height="48" viewBox="0 0 48 48">
                        <Path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                        <Path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                        <Path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                        <Path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                        </Svg>
                    </View>
                    <Text style={styles.text}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>

        
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
        width:'70%',
        height:'30%',
        alignItems:'center'
    },
    LoginText:{
        fontFamily:'Josefin Slab',
        fontSize:45,
        fontWeight:'bold',
        color: '#ffffff'
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


})
export default Login;
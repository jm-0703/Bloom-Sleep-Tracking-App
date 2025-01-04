import React, {useEffect,useState} from "react";
import { SafeAreaView, View, Text, StyleSheet, Image,TextInput, TouchableOpacity } from "react-native";
import {Svg,Path} from 'react-native-svg';
import {WebView} from 'react-native-webview'
import Config from "react-native-config";

const GoogleOAuth= ({navigation})=>{
    const googlOAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=${Config.REACT_NATIVE_GOOGLE_CLIENT_ID}&redirect_uri=${Config.REACT_NATIVE_REDIRECT_URI}`;
    console.log(googlOAuthUrl);

    const handleNavigationSateChange = (navState)=>{
        if(navState.navState.url.startWith(Config.REACT_NATIVE_REDIRECT_URI)){
            const code = navState.url.match(/code=([^&]*)/)
            if (code){
                console.log("login info: ",code);
            }else{
                console.log("Fail login")
            }
        }
    }

    return(
        <WebView 
            source={{uri:googlOAuthUrl}}
            style={{flex:1}}
            onError={(err) => console.log("test")}
            startInLoadingState/>
    )
    
    
}

export default GoogleOAuth;
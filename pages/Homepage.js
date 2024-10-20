import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
const HomePage = ()=>{
    return(
        <SafeAreaView style={styles.Container} >
            <Image source={require('../assets/images/logo.png')}/>
        </SafeAreaView>
    ) 
}

const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#242F42'
    },
    TestText:{ 
        fontSize:30, 
        width:'100%',
        backgroundColor:'#ff0000'
    }
    
})

export default HomePage;
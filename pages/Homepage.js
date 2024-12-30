import React, {useEffect} from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
const HomePage = ({navigation})=>{
    useEffect(()=>{
        const timer =  setTimeout(()=>{
            navigation.replace('Login');
        },2000);

        return () => clearTimeout(timer);
    },[navigation]);

    
    return(
        <SafeAreaView style={styles.Container} >
            <View style={styles.LogoContainer}>
                <Image style={styles.Logostyle} source={require('../assets/images/logo.png')}/>
                <View style={styles.TextContainer}>
                    <Text style={styles.NameText}>Bloom</Text>
                    <Text style = {styles.DesText}> Sleep Tracking App</Text>
                </View>
            </View>
        </SafeAreaView>
    ) 
}

const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#242F42',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    LogoContainer:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        //backgroundColor:'red'
    },
    TextContainer:{
       marginTop:10,
       width:'100%',
    },
    NameText:{ 
        fontSize:30, 
        width:'100%',
        color:'white',
        textAlign:'center',
        fontFamily:'Josefin Slab'

    },
    DesText:{
        fontSize: 19,
        width:'100%',
        color:'white',
        textAlign:'center',
        fontFamily:'Josefin Slab'

    },
    Logostyle:{
        width: 250,
        height:250,
    }
    
})

export default HomePage;
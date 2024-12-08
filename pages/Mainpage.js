import React,{useState} from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, Alert, Modal, Platform } from "react-native";
import Popup from "./popup";
import PushNotification  from "react-native-push-notification";
const Mainpage = ()=>{
    PushNotification.configure({
        PushNotification: function(notification){
            console.log('NOTIFICATION:',notification)
        },
        requestPermissions: Platform.OS === 'ios',
    });


    const createAlarm = () => {
        PushNotification.localNotificationSchedule(
            {
                title:'alarm title',
                message:'content',
                date: new Date(Date.now() + 5000),
                allowWhileIdle:true,
            }
        );
        Alert.alert("test");
    };

    const [isPopup,setPopup] = useState(false);
    const [isSleepMode,setSleepMode] = useState(false);

    const [time,setTime] = useState(false);
    const openPopup = () =>{
        setPopup(true);

    }
    const closePopup=() =>{
        setPopup(false);
    }

    const openSleepMode = () =>{
        //createAlarm();
        Alert.alert("test");
        setSleepMode(true);
    }
    const closeSleepMode = () =>{
        setSleepMode(false);
    }
    return(
        <SafeAreaView style={styles.Container}>

            <View style={styles.LogoContainer}>
                <View style={styles.LogoImage}>
                    <Image style={styles.ImageStyle} source={require('../assets/images/logo.png')}/>
                </View>
                <View style={styles.TextStyle}>
                    <Text style={styles.BloomStyle}>Bloom</Text>
                    <Text style={styles.DesStyle}>Sleep Tracking App</Text>
                </View>
                <View style={styles.StarImage}>
                    <Image style={styles.StarStyle} source={require('../assets/images/Stars.png')}/>
                </View>
            </View>

            <Text style={styles.SetAlarmText}>
                {time? time.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',hour12:true}):"Set your Alarm!"}
            </Text>
            <View style={styles.AlarmContainer}>
                <TouchableOpacity onPress={openPopup}>
                    <Image style={styles.AlarmStyle} source={require('../assets/images/alarm.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SleepModeButton} onPress={openSleepMode}>
                    <Text style={styles.SleepModeText}>Sleep Mode</Text>
                </TouchableOpacity>
            </View>
            
            <Modal 
                transparent={true}
                animationType="slide"
                visible={isPopup}>
                    <Popup onClose={closePopup} setTime={setTime} time={time}/>

            </Modal>

            <Modal
                transparent={true}
                animationType="slide"
                visible={isSleepMode}>
                <View style={styles.SleepModeOpen}>
                        <TouchableOpacity style={styles.EndSleepModeButton} onPress={closeSleepMode}>
                            <Text style={styles.SleepModeText}>End Sleep Mode</Text>
                        </TouchableOpacity>
                </View>
                
            </Modal>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#242F42'
    },
    LogoImage:{
        width:"30%",
    },
    StarImage:{
        width:"20%",
    },
    LogoContainer:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:'15%',
    },
    ImageStyle:{
        display:'flex',
        width:100,
        height:100
    },
    TextStyle:{
        width:'50%',
        display:'flex',
        justifyContent:'center',
        marginLeft:7,
    },
    BloomStyle:{
        color:'#ffffff',
        fontSize:18,
        fontWeight:'bold',
        fontFamily:'Josefin Slab'

    },
    DesStyle:{
        color:'white',
        fontSize:13,
        fontFamily:'Josefin Slab'

    },
    StarStyle:{
        display:'flex',
        justifyContent:'flex-end',
    },
    AlarmContainer:{
        //backgroundColor:'#ffffff',
        width:'100%',
        height:'85%',
        display:'flex',
        alignItems:'center'
    },
    AlarmStyle:{
        marginTop:30,
    },
    SleepModeButton:{
        backgroundColor:'#FDFD96',
        width:'70%',
        height: '9%',
        marginTop:10,
        borderRadius:15,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    SleepModeText:{
        fontSize:21,
        fontWeight:'bold',
        fontFamily:'Josefin Slab'

    },
    SetAlarmText:{
        marginTop:20,
        fontFamily:'Josefin Slab',
        textAlign:'center',
        fontSize:27,
        color:'#FAFDF0',
        fontWeight:'bold'
    },
    SleepModeOpen:{
        width:"100%",
        height:"100%",
        backgroundColor:'rgba(0,0,0,0.7)',
        display:'flex',
        alignItems:'center'
    },
    EndSleepModeButton:{
        backgroundColor:'#FDFD96',
        width:'70%',
        height: '7%',
        marginTop:'153%',
        borderRadius:15,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },


})

export default Mainpage;
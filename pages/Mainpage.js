import React,{useState} from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, Alert, Modal, Platform } from "react-native";
import Popup from "./popup";
import RatePopup from "./ratepopup";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
const Mainpage = ()=>{
    PushNotificationIOS.requestPermissions()
    .then((permissions) => {
        console.log('Permission Granted:', permissions);
    })
    .catch((error) => {
        console.log('Permission Denied:', error);
    });
    
    PushNotificationIOS.requestPermissions();

    const createAlarm = () => {
        console.log("Alarm set");
        PushNotificationIOS.addNotificationRequest({
            id: "test_alarm", // 알림 ID
            title: "Test Alarm",
            body: "This is a test notification.",
            fireDate: new Date(Date.now() + 60000).toISOString(), // 5초 후 알림
        });
        console.log("Notification scheduled");
        PushNotificationIOS.getPendingNotificationRequests((requests) => {
            console.log("Pending Notifications:", requests);
        });
    };

    const [isPopup,setPopup] = useState(false);
    const [isratePopup, setratePopup] = useState(false);
    const [isSleepMode,setSleepMode] = useState(false);

    const [time,setTime] = useState(false);
    const openPopup = () =>{
        setPopup(true);

    }
    const closePopup=() =>{
        setPopup(false);
    }

    const openSleepMode = () =>{
        createAlarm();
        //Alert.alert("test");
        setSleepMode(true);
    }
    const closeSleepMode = () =>{
        setSleepMode(false);
        setratePopup(true);
    }
    const OnRate = () =>{
        setratePopup(false);
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
                visible={isratePopup}>
                    <RatePopup OnRate={OnRate}/>
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
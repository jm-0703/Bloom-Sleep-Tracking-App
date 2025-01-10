import React, {useEffect,useState} from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import  DateTimePicker from "@react-native-community/datetimepicker";
const Popup = ({navigation, onClose, setTime ,time})=>{

    const onChange = (event, selectDate) => {
        const current_time = selectDate || time;
        setTime(current_time);
    }
    return (
        <SafeAreaView style = {style.Container}>
            <View style={style.Popup_style}>
                <View>
                    <TouchableOpacity style={style.closebutton} onPress={onClose}>
                        <Text style={style.closeText}>X</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.SetAlarm}>
                    Set Alarm
                </Text>
                <View style={style.DataPickerContainer}> 
                    <DateTimePicker
                        value={time || new Date()}
                        mode="time"
                        is24Hour={true}
                        display="spinner"
                        onChange={onChange}
                        style={style.clockstyle}
                        textColor="#242F42"/>
                </View>
                <View style={style.ButtonContainer} >
                    <TouchableOpacity style={style.SetButton} onPress={onClose}>
                        <Text style={style.SetText}>Set</Text>

                    </TouchableOpacity>

                </View>
               

            </View>
            
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    Container:{
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center'
    },

    Popup_style:{
        marginTop:'48%',
        width:'74%',
        height:'44%',
        backgroundColor:'#FAFDF0',
        borderRadius:17
    },
    closebutton:{
        width:30,
        height:30,  
        marginLeft:'83%',   
        marginTop:'8%',   
        borderRadius: 10,
        backgroundColor:'#242F42',
        color:'#FAFDF0',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
        
    },

    closeText:{
        paddingTop:2,
        color:'#FAFDF0',
        fontWeight:'bold',
        fontSize:18,
        fontFamily:'Josefin Slab'
    },
    SetAlarm:{
        fontFamily:'Josefin Slab',
        width:'100%',
        textAlign:'center',
        fontSize:23,
        fontWeight:'bold'
        
        

    },
    DataPickerContainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    clockstyle:{
        marginTop:'1%',
        marginLeft:'6%',
        width:'80%',
        height:'60%',

        fontFamily:'Josefin Slab'
    },
    ButtonContainer:{
        width:'100%',
        height:'20%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

    },
    SetButton:{
        width:'80%',
        height:'70%',
        marginBottom:'15%',
        backgroundColor:'#242F42',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:13
    },
    SetText:{
        textAlign:'center',
        fontFamily:'Josefin Slab',
        fontSize:30,
        fontWeight:'bold',
        color:'#FAFDF0',
    },
    
})


export default Popup;
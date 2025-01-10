import React, {useEffect,useState} from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Svg,Polygon} from 'react-native-svg';
const RatePopup =({navigation,OnRate})=>{
    const [isStarfill,setStarfill] = useState(['none','none','none','none','none'])
    const handle_fill=(index)=>{
        const update_array = [...isStarfill];
        update_array[index] = isStarfill[index]=='black'?'none':'black'
        setStarfill(update_array);
    }
    
    return(
        <SafeAreaView style={style.Container}>
            <View style={style.Popup_style}>
                <View>
                    <TouchableOpacity style={style.closebutton} onPress={OnRate}>
                        <Text style={style.closeText}>X</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.RateText}>Rate your sleep quality</Text>
                <View style={style.StarContainer}>
                    <TouchableOpacity style={style.Star} onPress={()=>handle_fill(0)}>
                        <Svg
                            className="feather feather-star"
                            fill={isStarfill[0]}
                            height="48"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 48 48"
                            width="48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Star} onPress={()=>handle_fill(1)}>
                        <Svg
                            className="feather feather-star"
                            fill={isStarfill[1]}
                            height="48"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 48 48"
                            width="48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </Svg>
                    
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Star} onPress={()=>handle_fill(2)}>
                        <Svg
                            className="feather feather-star"
                            fill={isStarfill[2]}
                            height="48"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 48 48"
                            width="48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Star} onPress={()=>handle_fill(3)}>
                        <Svg
                            className="feather feather-star"
                            fill={isStarfill[3]}
                            height="48"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 48 48"
                            width="48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Star} onPress={()=>handle_fill(4)}>
                        <Svg
                            className="feather feather-star"
                            fill={isStarfill[4]}
                            height="48"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 48 48"
                            width="48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </Svg>
                    </TouchableOpacity>

                    

                </View>
                <View style={style.ButtonContainer}>
                    <TouchableOpacity style={style.SaveButton} onPress={OnRate}>
                        <Text style={style.SaveText}>Save</Text>
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
    RateText:{
        marginTop:50,
        fontFamily:'Josefin Slab',
        width:'100%',
        textAlign:'center',
        fontSize:23,
        fontWeight:'bold'
    },
    StarContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:16,
        width:'100%',
    },
    Star:{
        display:'flex',
        width:'5%',
        height:'70%',
        marginLeft:35,
        marginTop:30
        
    },
    ButtonContainer:{
        width:'100%',
        height:'20%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f0f0f0'
    },
    SaveButton:{
        width:'80%',
        height:'70%',
        marginBottom:'15%',
        backgroundColor:'#242F42',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:13
    },
    SaveText:{
        textAlign:'center',
        fontFamily:'Josefin Slab',
        fontSize:28,
        fontWeight:'bold',
        color:'#FAFDF0',
    }



    
})


export default RatePopup;

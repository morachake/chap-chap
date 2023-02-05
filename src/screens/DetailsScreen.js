import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import { COLORS } from '../constants/index'
import { ScaledSheet, scale } from 'react-native-size-matters';
import CustomCheck from '../components/CustomCheck';
import DatePicker from 'react-native-date-picker';
export default function DetailsScreen({ navigation }) {
    const [state, setState] = useState({
        houses: '',
        rooms: '',
        adress: '',
        details:'',
        date:new Date(),
      });
    const [open,setOpen]= useState(false)
    const [checked, setChecked] = useState(false);
    const [date,setDate] = useState(new Date())
    const handleSubmit = () => { 
        navigation.navigate('Cleaner',{state})
    }
    return (

        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Header iconLeft="arrowleft" />
                <Text style={{fontSize:scale(32),marginHorizontal:scale(15)}}>House Cleaning</Text>
                
            <View style={styles.topContainer}>
                
                <MainInput
                    label="Type of House"
                    onChangeText={(text) => setState({ ...state, houses: text })}
                />
                <MainInput
                    label="Number of rooms"
                    onChangeText={(text) => setState({...state, rooms:text})}
                />
                <MainInput
                    label="Adress"
                    onChangeText={(text) => setState({...state,adress:text})}
                />
                <MainInput
                    label="Any other Details"
                    onChangeText={(text) => setState({...state, details:text})}
                />
                <View>
                    <Text style={{
                        marginTop: scale(20),
                        fontSize: scale(13),
                        color: '#00000080',
                        fontFamily: 'Inter-Medium'
                    }}>
                        Date And Time
                    </Text>
                    <View style={{ alignItems: 'center', justifyContent: "center", flexDirection: 'row', width: '90%', marginTop: scale(5) }}>

                        <View style={styles.checkboxContainer}>
                            <Text style={styles.label}>Right Away</Text>
                            <CustomCheck value={checked} onValueChange={setChecked} />
                        </View>

                        <TouchableOpacity style={styles.calendaCont} onPress={() => setOpen(!open)} >
                            <Text>{date ? date.toLocaleString() : "Schedule"}</Text>
                            <DatePicker
                                modal
                                open={open}
                                date={date}
                                onConfirm={(date) => {
                                    setOpen(false)
                                    setDate(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                                androidVariant='iosClone'
                                mode="datetime"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <MainInput label="" />
            </View>
            <View style={styles.bottomContainer}>
                <View>
                    <Text
                        style={{
                            fontSize: scale(17),
                            color: '#00000080',
                            fontFamily: 'Inter-Medium'
                        }}>Total Price</Text>
                    <Text
                        style={{
                            fontSize: scale(15), color:
                                '#00000080', fontFamily:
                                'Inter-Light'
                        }}
                    >KES 20300 - 20700</Text>
                </View>
                    <View >
                        <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                            <Text style={{ color: '#FFFF', fontSize: 14 }}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
        </KeyboardAvoidingView>

    );
}
const styles = ScaledSheet.create({
    container: {
       // flex: 1,
        backgroundColor: '#FFFF',
    },
    topContainer: {
        //flex: 0.9,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        bottom: '-60@s',
        width: '100%',
        height:95,
        backgroundColor: '#C4F3FF',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        //position:'relative'
    },
    btn: {
        backgroundColor: COLORS.primary,
        borderRadius: '8@s',
        height: '40@s',
        width: '130@s',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderColor: '#111',
        borderWidth: 1,
        borderRadius: '6@s',
    },
    checkboxContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 2,
        height: '41@s',
        flex: 0.3,
        borderRadius: '6@s'
    },
    calendaCont: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 2,
        marginHorizontal: '8@s',
        height: '41@s',
        flex: 0.7,
        borderRadius: '6@s'
    },
    label: {
        fontSize: scale(12),
        color: '#00000080',
        fontFamily: 'Inter-Medium'
    }
});


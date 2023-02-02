import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import { COLORS } from '../constants/index'
import { ScaledSheet, scale } from 'react-native-size-matters';
import Fontiso from 'react-native-vector-icons/Fontisto';
import CustomCheck from '../components/CustomCheck';
import DatePicker from 'react-native-date-picker';
export default function DetailsScreen({ navigation }) {
    const [houses, setHouses] = useState()
    const [rooms, setRooms] = useState()
    const [adress, setAdress] = useState()
    const [details, setDetails] = useState()
    const [checked, setChecked] = useState(false);
    const [date, setDate] = useState(new Date())
     const [open, setOpen] = useState(false)
    const handleSubmit = () => {

    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Header iconLeft="arrowleft" />
            <View style={styles.topContainer}>
                <Text>This is the top container</Text>
                <MainInput label="Type of House" onChangetext={text => setHouses(text)} />
                <MainInput label="Number of rooms" />
                <MainInput label="Adress" />
                <MainInput label="Any other Details" />
                <View style={{ alignItems:'center',justifyContent:"center",marginTop:scale(20),flexDirection:'row'}}>
                    <View style={styles.checkboxContainer}>
                        <Text style={styles.label}>Right Away</Text>
                        <CustomCheck value={checked} onValueChange={setChecked} />
                    </View>
                    
                    <TouchableOpacity style={styles.calendaCont} onPress={() => setOpen(true)} >
                        <Text>{date ? date.toString(): "Book"}</Text>
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
                            />
                        </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View>
                    <Text
                        style={{
                            fontSize: scale(17),
                            color: '#00000080',
                            fontFamily:
                                'Inter-Medium'
                        }}
                    >Total Price</Text>
                    <Text
                        style={{
                            fontSize: scale(15), color:
                                '#00000080', fontFamily:
                                'Inter-Light'
                        }}
                    >KES 20300 - 20700</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Cleaner')} style={styles.btn}>
                    <Text style={{ color: '#FFFF', fontSize: 14 }}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
    },
    topContainer: {
        flex: 0.9,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        flex: 0.1,
        backgroundColor: '#C4F3FF',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: COLORS.primary,
        borderRadius: '8@s',
        height: '45@s',
        width: '150@s',
        alignItems: 'center',
        justifyContent: 'center'
    },
    calendar: {
        borderWidth: 1,
        display: 'flex',
        width: '90%',
        marginTop: '10@s',
        borderRadius: '6@s',
        backgroundColor: '#FFFF',
    },
    input: {
        borderColor: '#111',
        borderWidth: 1,
        borderRadius: '6@s',
    },
    checkboxContainer: {
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 2,
        height: '41@s',
        flex:0.3,
        borderRadius:'6@s'
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
    calendaCont: {
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 2,
        marginHorizontal:'8@s',
        height: '41@s',
        flex:0.7,
        borderRadius:'6@s'
    }
});


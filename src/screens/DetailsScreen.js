import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import { COLORS } from '../constants/index'
import CalendarDatePicker from 'react-native-calendar-datepicker';
export default function DetailsScreen() {
    const [date, setDate] = useState(new Date().toDateString());
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [houses, setHouses] = useState()
    const [rooms, setRooms] = useState()
    const [adress, setAdress] = useState()
    const [details, setDetails] = useState()
    const handleSubmit = () => {

    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Header iconLeft="arrowleft"  />
            <View style={styles.topContainer}>
                <Text>This is the top container</Text>
                <MainInput label="Type of House" onChangetext={text => setHouses(text)} />
                <MainInput label="Number of rooms" />
                <MainInput label="Adress" />
                <MainInput label="Any other Details" />
                {/* calendar input start */}
                <View style={styles.calendar}>
                    <TextInput
                        style={styles.input}
                        onFocus={() => setShowCalendar(true)}
                        keyboardType="none"
                        value={selectedDate.toDateString()}
                    />
                    {showCalendar && (
                        <CalendarDatePicker
                            onDateChange={date => {
                                setSelectedDate(date);
                                setShowCalendar(false);
                            }}
                            initialDate={selectedDate}
                        />
                    )}
                </View>
                {/* calendar input end */}
            </View>
            <View style={styles.bottomContainer}>
                <View>
                    <Text style={{ fontSize: 17, color: '#00000080', fontFamily: 'Inter-Medium' }}>Total Price</Text>
                    <Text style={{ fontSize: 15, color: '#00000080', fontFamily: 'Inter-Light' }}>KES 20300 - 20700</Text>

                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                    <Text style={{ color: '#FFFF', fontSize: 14 }}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
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
        borderRadius: 8,
        height: 45,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    calendar: {
        borderWidth: 1,
        display: 'flex',
        width: '90%',
        marginTop: 10,
        borderRadius: 6,
        backgroundColor: '#FFFF',
    },
    input: {
        borderColor: '#111',
        borderWidth: 1,
        borderRadius: 6,
    }
});


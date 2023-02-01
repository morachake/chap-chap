import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CalendarDatePicker from 'react-native-calendar-datepicker';
import { ScaledSheet, scale } from 'react-native-size-matters';

export default function CalendarInput() {
    const [date, setDate] = useState(new Date().toDateString());
    const [showCalendar, setShowCalendar] = useState(false);
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onFocus={() => setShowCalendar(true)}
                value={date}
                showSoftInputOnFocus={false}
            />
            {showCalendar && (
                <CalendarDatePicker
                    onDateChange={date => {
                        setDate(date.toDateString());
                        setShowCalendar(false);
                    }}
                    initialDate={new Date()}
                    style={{ backgroundColor: '#EAFFFF', marginTop: scale(5),borderWidth: 1 ,borderRadius: scale(15)}}
                />
            )}
        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        display: 'flex',
        width: '90%',
        marginTop: '10@s',
        backgroundColor: '#FFFF',
    },
    input: {
        marginTop: '10@s',
        borderColor: '#111',
        borderWidth: '1@s',
        borderRadius: '6@s',
    }
})

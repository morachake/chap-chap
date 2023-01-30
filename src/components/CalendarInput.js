import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CalendarDatePicker from 'react-native-calendar-datepicker';

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
                    style={{ backgroundColor: '#EAFFFF', marginTop: 5,borderWidth: 1 ,borderRadius: 15}}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '90%',
        marginTop: 10,
        backgroundColor: '#FFFF',
    },
    input: {
        marginTop: 10,
        borderColor: '#111',
        borderWidth: 1,
        borderRadius: 6,
    }
})

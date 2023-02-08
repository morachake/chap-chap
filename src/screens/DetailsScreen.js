import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import { COLORS } from '../constants/index'
import { ScaledSheet, scale } from 'react-native-size-matters';
import CustomCheck from '../components/CustomCheck';
import DatePicker from 'react-native-date-picker';
export default function DetailsScreen({ navigation }) {
    const [open, setOpen] = useState(false)
    const [checked, setChecked] = useState(false);
    const [date, setDate] = useState(new Date())
    const [errorMessage, setErrorMessage] = useState('');
    const [houses, setHouses] = useState()
    const [rooms, setRooms] = useState()
    const [adress, setAdress] = useState()
    const [details,setDetails]=useState()
    const handleSubmit = () => {
        if (!houses || !rooms || !adress || !details ) {
            setErrorMessage('All mandatory fields must be filled')
        } else {
            navigation.navigate('Cleaner')
        }
    }
    const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior="height" style={styles.container}>
                <Header iconLeft="arrowleft" />
                    <Text style={styles.header}>House Cleaning</Text>
                <View style={{justifyContent: 'center',alignItems: 'center',}}>
                    {errorMessage ? (
                        <Text style={styles.errormessage}>{errorMessage}</Text>
                    ) : null}
                </View>
                    <ScrollView>
               
                    <View style={styles.topContainer}>

                        <MainInput
                            label="Type of House"
                            onChangeText={(text) => setHouses(text) }
                        />
                        <MainInput
                            label="Number of rooms"
                            onChangeText={(text) =>  setRooms(text)}
                        />
                        <MainInput
                            label="Adress"
                            onChangeText={(text) => setAdress(text)}
                        />
                        <MainInput
                            label="Any other Details"
                            onChangeText={(text) => setDetails(text)}
                        />
                        <View>
                            <Text style={{
                                marginTop: scale(20),
                                fontSize: scale(13),
                                color: 'rgba(0, 0, 0, 0.7)',
                                fontFamily: 'Inter-Medium'
                               
                            }}>
                                Date And Time
                            </Text>
                            <View style={styles.checkbox}>

                                <View style={styles.checkboxContainer}>
                                    <Text style={styles.label}>Right Away</Text>
                                    <CustomCheck value={checked} onValueChange={setChecked} />
                                </View>

                                <TouchableOpacity
                                    style={styles.calendaCont}
                                    onPress={() => setOpen(!open)}
                                >
                                    <Text style={styles.label}>{date ? date.toLocaleString() : "Schedule"}</Text>
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
                
                

                </ScrollView>            
                <TouchableOpacity style={{ display: keyboardVisible ? 'none' : 'flex' }}>
                <View style={styles.bottomContainer}>
                    <View>
                        <Text
                            style={{
                                fontSize: scale(15),
                                color: 'rgba(0, 0, 0, 0.5)',
                                fontFamily: 'Inter-semiBold'
                            }}>Total Price</Text>
                        <Text
                            style={{
                                fontSize: scale(15),
                                color: '#0000000',
                                fontFamily:'Inter-Bold'
                            }}
                        >KES 20300 - 20700</Text>
                    </View>
                    <View >
                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={styles.btn}
                        >
                            <Text
                                style={{
                                    color: '#FFFF',
                                    fontSize: scale(14)
                                }}
                            >Book Now</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    </TouchableOpacity>
            </KeyboardAvoidingView>            
        </TouchableWithoutFeedback>
    );
}
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        height:'100%',
        backgroundColor: '#F5F5F5',
        justifyContent: "space-around"
    },
    topContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'30@s'
    },
    header: {
        fontSize: scale(32),
        marginHorizontal: scale(15),
        fontFamily: 'Inter-Bold',
        color: '#000000'
    },
    bottomContainer: {
        //width: '100%',
        backgroundColor: '#C4F3FF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '80@s',
        position: 'relative',
        marginBottom: 0,
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
        height: '42@s',
        flex: 0.3,
        borderRadius: '6@s',
        backgroundColor:'#FFFF'
    },
    checkbox: {
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row',
        width: '92%',
        marginTop: scale(5)
    },
    calendaCont: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 2,
        marginHorizontal: '8@s',
        height: '42@s',
        flex: 0.7,
        borderRadius: '6@s',
        backgroundColor:'#FFFF'
    },
    label: {
        fontSize: scale(12),
        color: '#0000000',
        fontFamily: 'Inter-Medium'
    },
    errormessage: {
        fontSize: '14@s',
        fontFamily:'Inter-Italic',
        color: 'red',
        margin: '5@s',
    }
});


import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native';
import Header from '../components/Header';
import MainInput from '../components/MainInput';
import {COLORS} from '../constants/index';
import {ScaledSheet, scale} from 'react-native-size-matters';
import CustomCheck from '../components/CustomCheck';
import DatePicker from 'react-native-date-picker';
export default function DetailsScreen({navigation}) {
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [houses, setHouses] = useState();
  const [rooms, setRooms] = useState();
  const [adress, setAdress] = useState();
  const [details, setDetails] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleSubmit = () => {
    if (!houses || !rooms || !adress || !details) {
      setErrorMessage('All mandatory fields must be filled');
    } else {
      navigation.navigate('Cleaner');
    }
  };
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <Header
          iconLeft="arrowleft"
          pagename={undefined}
          iconright={undefined}
        />
        <Text style={styles.header}>House Cleaning</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {errorMessage ? (
            <Text style={styles.errormessage}>{errorMessage}</Text>
          ) : null}
        </View>
        <ScrollView>
          <View style={styles.topContainer}>
            <MainInput
              label="Type of House"
              onChangeText={text => setHouses(text)}
            />
            <MainInput
              label="Number of rooms"
              onChangeText={text => setRooms(text)}
            />
            <MainInput label="Adress" onChangeText={text => setAdress(text)} />
            <MainInput
              label="Any other Details"
              onChangeText={text => setDetails(text)}
            />
            {/* modal start */}
            <View>
              <Text
                style={{
                  marginTop: scale(20),
                  fontSize: scale(13),
                  color: 'rgba(0, 0, 0, 0.7)',
                  fontFamily: 'Inter-Medium',
                }}
              >
                {' '}
                Date And Time
              </Text>
              <View style={styles.checkbox}>
                <View style={styles.checkboxContainer}>
                  <Text style={styles.label}>Right Away</Text>
                  <CustomCheck value={checked} onValueChange={setChecked} />
                </View>

                <TouchableOpacity
                  style={styles.calendaCont}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.label}>
                    {selectedDate ? selectedDate.toLocaleString() : 'Schedule'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}
            >
              <View style={styles.modal}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalInnerContainer}>
                    <Text style={styles.modalTitle}>
                      {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : 'Select a date'}
                    </Text>
                    <DatePicker
                      date={selectedDate}
                      mode="datetime"
                      androidVariant="iosClone"
                      onDateChange={date => {
                        setSelectedDate(date);
                        setModalVisible(false);
                      }}
                    />
                  </View>
                </View>
              </View>
            </Modal>
            {/* modal end */}
            <MainInput label="" onChangeText={undefined} />
          </View>
        </ScrollView>
        <TouchableOpacity style={{display: keyboardVisible ? 'none' : 'flex'}}>
          <View style={styles.bottomContainer}>
            <View>
              <Text
                style={{
                  fontSize: scale(15),
                  color: 'rgba(0, 0, 0, 0.5)',
                  fontFamily: 'Inter-semiBold',
                }}
              >
                Total Price
              </Text>
              <Text
                style={{
                  fontSize: scale(15),
                  color: '#000000',
                  fontFamily: 'Inter-Bold',
                }}
              >
                KES 20300 - 20700
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                <Text
                  style={{
                    color: '#FFFF',
                    fontSize: scale(14),
                  }}
                >
                  Book Now
                </Text>
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
    height: '100%',
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-around',
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30@s',
  },
  header: {
    fontSize: scale(32),
    marginHorizontal: scale(15),
    fontFamily: 'Inter-Bold',
    color: '#000000',
  },
  bottomContainer: {
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
    justifyContent: 'center',
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
    backgroundColor: '#FFFF',
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '92%',
    marginTop: scale(5),
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
    backgroundColor: '#F5F5F5',
  },
  label: {
    fontSize: scale(12),
    color: '#000000',
    fontFamily: 'Inter-Medium',
  },
  errormessage: {
    fontSize: '14@s',
    fontFamily: 'Inter-Italic',
    color: 'red',
    margin: '5@s',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalInnerContainer: {
    width: '100%',
    height: '100%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

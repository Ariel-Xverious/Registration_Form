import { Text, View, StyleSheet, Button, Modal, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  return (
    <View style={styles.container}>
      <Modal animationType={'slide'} visible={modalVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lightblue',
          }}>
          <View style={[styles.modalView, styles.shadow]}>
            <Text>Are you sure you want to Register? </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                padding: 10,
              }}>
              <Button title="Yes" onPress={() => setModalVisible2(true)} />
              <Button title="No" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>

      <Modal animationType={'slide'} visible={modalVisible2} transparent={true}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'yellow',
          }}>
          <View>
            <Text
              style={{
                fontSize: 30,
                marginTop: 20,
                padding: 10,
              }}>
              Successful Registration!
            </Text>
          </View>
        </View>
      </Modal>

      <Text
        style={{
          fontSize: 30,
          marginTop: 20,
          padding: 10,
        }}>
        Register!
      </Text>

      <TextInput
        style={{
          height: 45,
          width: '95%',
          borderColor: 'white',
          borderWidth: 5,
          borderRadius: 6,
          marginTop: 20,
          backgroundColor: 'lightblue',
          padding: 10,
        }}
        placeholder="Enter UserName"
      />
      <TextInput
        style={{
          height: 45,
          width: '95%',
          borderColor: 'white',
          borderWidth: 5,
          borderRadius: 6,
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: 'lightblue',
          padding: 10,
        }}
        placeholder="Enter Email Address"
      />

      <Button
        title="Register"
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'pink',
  },
  modalView: {
    padding: 15,
    backgroundColor: 'white',
    width: '80%',
    borderColor: 'silver',
    borderWidth: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});

/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, Image, TextInput, Button, StyleSheet, Alert} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import mockUserData from '../data/mock';
const Login = ({navigation}) => {
  const [user, onChangeUser] = React.useState('');
  const [pass, onChangePass] = React.useState('');

  const buttonVerify = () => {

    // let buttonOnOff = true;
    if (user === mockUserData.username && pass === mockUserData.password) {
      navigation.navigate('Home');
    } else   {
      Alert.alert('Login e senha Incorretos', 'Coloque senha e login corretos para continuar', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  return (
    <ScrollView style={LoginStyle.divAll}>
      <Image source={require('../images/LogotTest.png')} style={LoginStyle.logo} resizeMode="center" />
      <TextInput placeholder="Enter your user" style={LoginStyle.LoginForm} value={user} onChangeText={onChangeUser}/>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter Password"
        style={LoginStyle.LoginForm}
        value={pass}
        onChangeText={onChangePass}
      />
      <Button title="Enter" style={LoginStyle.ButtonForm} onPress={() => buttonVerify()}/>
    </ScrollView>
  );
};

const LoginStyle = StyleSheet.create({
  divAll: {
    margin: '2%',
    backgroundColor: '#029DD3',
    maxWidth: 550,
    minWidth: 250,
    maxHeight: 750,
    alignSelf: 'center',
    borderRadius: 20,
  },
  logo: {
    alignSelf: 'center',
    maxWidth: 500,
    minWidth: 350,
    height: 270,
    borderRadius: 270,
    margin: 20,
  },
  LoginForm: {
    alignSelf: 'center',
    maxWidth: 500,
    minWidth: 350,
    backgroundColor: '#09EAEB',
    color: '#fff',
    margin: '2%',
    borderRadius: 15,
    padding: 10,
  },
  ButtonForm: {
    maxWidth: 300,
    margin: 200,
    backgroundColor: '#09EAEB',
  },
});

export default Login;

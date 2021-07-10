import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
} from 'react-native';

const Register: () => Node = () => {

  return (
    <View>
      <Text>Register</Text>
      <Text>Full name</Text>
      <TextInput placeholder="Full name" />
      <Text>Email</Text>
      <TextInput placeholder="Email" />
      <Text>Password</Text>
      <TextInput placeholder="Password" />
      <Text>Confirm password</Text>
      <TextInput placeholder="Confirm password" />
      <Button title="Submit"/>
    </View>
  );
};


export default Register;

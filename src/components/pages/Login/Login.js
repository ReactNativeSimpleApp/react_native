import React from 'react';
import type {Node} from 'react';
import {Text, TextInput, Button, View} from 'react-native';
import {Link} from '@react-navigation/native';

const Login: () => Node = () => {
  return (
    <View>
      <Text>Login</Text>
      <Text>Email</Text>
      <TextInput placeholder="Email" />
      <Text>Password</Text>
      <TextInput placeholder="Password" />
      <Button title="Submit" />
      <Button
        title="Register"
        onPress={() => this.props.navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;

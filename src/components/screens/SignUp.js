import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';

import jsonApiService from '../../services/jsonApiServise';

import { ScrollView } from 'react-native';

import Text from '../reusable/Text';

const checkAuthData = (password, confirmPassword, email, emails) => {
  let validation = {
    error: [],
    result: true,
  };
  //Minimum 8 and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(
      password,
    )
  ) {
    validation.error.push(
      'Password must have Minimum 8 and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character ',
    );
    validation.result = false;
  }
  if (password !== confirmPassword) {
    validation.error.push(`password and confirm password doesn't match`);
    validation.result = false;
  }
  if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
    validation.error.push('this email is not valide');
    validation.result = false;
  } else if (emails.includes(email)) {
    validation.error.push('user with such email is already exist');
    validation.result = false;
  }
  // console.log(validation);
  return validation;
};

export default SignUp = ({navigation}) => {
      const [validation, setValidation] = useState({
    error: [],
    result: false,
  });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    jsonApiService
      .getUsers()
      .then(data => {
        setEmails(data.data.data.map(user => user.email));
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
    return (
        <ScrollView>
            <Container>
                <Main>
                    <Text title semi center color="#17a2b8">Sign Up</Text>
                </Main>

                    <Auth>
                        <AuthTitle>Full Name</AuthTitle>
                        <AuthContainer>
                            <Ionicons name="md-person-outline" size={24} color="#17a2b8"/>
                            <AuthField 
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoFocus={true}
                                />
                        </AuthContainer>

                        <AuthTitle>Email Adress</AuthTitle>
                        <AuthContainer>
                            <Ionicons name="md-mail-outline" size={24} color="#17a2b8"/>
                            <AuthField 
                                autoCapitalize="none"
                                autoCompleteType="email"
                                autoCorrect={false}
                                autoFocus={true}
                                keyboardType="email-address"
                                onChangeText={text => setEmail(text)}
                                />
                        </AuthContainer>

                        <AuthTitle>Password</AuthTitle>
                        <AuthContainer>
                            <Ionicons name="md-key-outline" size={24} color="#17a2b8"/>
                            <AuthField 
                                autoCapitalize="none"
                                autoCompleteType="password"
                                autoCorrect={false}
                                autoFocus={true}
                                secureTextEntry={true}
                                onChangeText={text => setPassword(text)}
                                />
                        </AuthContainer>

                        <AuthTitle>Confirm Password</AuthTitle>
                        <AuthContainer>
                            <Ionicons name="md-key-outline" size={24} color="#17a2b8"/>
                            <AuthField 
                                autoCapitalize="none"
                                autoCompleteType="password"
                                autoCorrect={false}
                                autoFocus={true}
                                secureTextEntry={true}
                                onChangeText={text => setConfirmPassword(text)}
                                />
                        </AuthContainer>
                    </Auth>

                    <SignUpContainer>
                        <Text bold center color="#fff">Sign Up</Text>
                    </SignUpContainer>

                    <SignIn 
                        onPress={() => setValidation(checkAuthData(password, confirmPassword, email, emails))}>
                        <Text small center color="#8e93a1" margin="0 0 6px 0">
                            Have an account?{" "}
                            <Text bold color="black" color="#17a2b8">
                                Sign In
                            </Text>
                        </Text>
                    </SignIn>
            </Container>
        </ScrollView>
    );
};
    

const Container = styled.View`
    flex: 1;
    background-color: #343a40;
`;

const Main = styled.View`
    margin-top: 40px;
`;

const Auth = styled.View`
    margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 32px;
    border-bottom-color: #8e93a1;
    border-bottom-width: 1px;
`;

const AuthTitle = styled(Text)`
  color: #8e93a1;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`;

const AuthField = styled.TextInput`
    height: 48px; 
    flex: 1;
    color: #17a2b8;
`;

const SignUpContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #17a2b8;
    border-radius: 6px;
`;

const SignIn = styled.TouchableOpacity`
  margin-top: 16px;
`;

export default SignUp;

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import jsonApiService from '../../services/jsonApiServise';

import Text from '../reusable/Text';

export default SignUp = ({navigation}) => {
  let {email, setEmail} = useState();
  let {users, setUsers} = useState();
  useEffect(() => {
    jsonApiService
      .getUsers()
      .then(data => {
        setUsers(data.data);
      })
      .catch(err => {
        console.log('fuck');
      });
  }, []);

  useEffect(() => {}, [email]);

  return (
    <Container>
      <Main>
        <Text title semi center>
          Sign Up
        </Text>
      </Main>

      <Auth>
        <AuthContainer>
          <AuthTitle>Full Name</AuthTitle>

          <AuthField
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
          />
        </AuthContainer>

        <AuthContainer>
          <AuthTitle>Email Adress</AuthTitle>

          <AuthField
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            autoFocus={true}
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
          />
        </AuthContainer>

        <AuthContainer>
          <AuthTitle>Password</AuthTitle>

          <AuthField
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            autoFocus={true}
            secureTextEntry={true}
          />
        </AuthContainer>

        <AuthContainer>
          <AuthTitle>Confirm Password</AuthTitle>

          <AuthField
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            autoFocus={true}
            secureTextEntry={true}
          />
        </AuthContainer>
      </Auth>

      <SignUpContainer>
        <Text bold center color="#fff">
          Sign Up
        </Text>
      </SignUpContainer>

      <SignIn onPress={() => navigation.navigate('SignIn')}>
        <Text small center>
          Have an account?{' '}
          <Text bold color="black">
            Sign In
          </Text>
        </Text>
      </SignIn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 100px;
`;

const Auth = styled.View`
  margin: 50px 32px 32px;
`;

const AuthContainer = styled.View`
  margin-bottom: 20px;
`;

const AuthTitle = styled(Text)`
  color: #8e93a1;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`;

const AuthField = styled.TextInput`
  border-bottom-color: #8e93a1;
  border-bottom-width: 1px;
  height: 48px;
`;

const SignUpContainer = styled.TouchableOpacity`
  margin: 0 32px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #8e93a1;
  border-radius: 6px;
`;

const SignIn = styled.TouchableOpacity`
  margin-top: 16px;
`;

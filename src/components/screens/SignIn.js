import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Text from '../reusable/Text';
import jsonApiService from '../../services/jsonApiServise';
const checkAuthData = (email, emails) => {
  let validation = {
    error: [],
    result: true,
  };
  console.log(emails);
  if (!emails.includes(email)) {
    validation.error.push('no user with such email is on sys');
    validation.result = false;
  } else if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
    validation.error.push('this email is not valide');
    validation.result = false;
  }
  console.log(validation);
  return validation;
};
export default SignIn = ({navigation}) => {
  const [validation, setValidation] = useState({
    error: [],
    result: false,
  });
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState('');
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
    <Container>
      <Main>
        <Text title semi center>
          Sign In
        </Text>
      </Main>

      <Auth>
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
            secureTextEntry={true}
          />
        </AuthContainer>
      </Auth>

      <SignInContainer
        onPress={() => setValidation(checkAuthData(email, emails))}>
        <Text bold center color="#fff">
          Sign In
        </Text>
      </SignInContainer>

      <SignUp onPress={() => navigation.navigate('SignUp')}>
        <Text small center>
          New here?{' '}
          <Text bold color="black">
            Sign Up
          </Text>
        </Text>
      </SignUp>
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
  margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
  margin-bottom: 32px;
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

const SignInContainer = styled.TouchableOpacity`
  margin: 0 32px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #8e93a1;
  border-radius: 6px;
`;

const SignUp = styled.TouchableOpacity`
  margin-top: 16px;
`;

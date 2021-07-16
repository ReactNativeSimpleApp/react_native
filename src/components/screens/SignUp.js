import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import jsonApiService from '../../services/jsonApiServise';

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

const SignUp = ({navigation}) => {
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
            onChangeText={text => setPassword(text)}
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
            onChangeText={text => setConfirmPassword(text)}
          />
        </AuthContainer>
      </Auth>

      <SignUpContainer
        onPress={() =>
          setValidation(checkAuthData(password, confirmPassword, email, emails))
        }>
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

export default SignUp;

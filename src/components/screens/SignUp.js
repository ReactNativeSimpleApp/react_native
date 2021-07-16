import React from 'react';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ScrollView } from 'react-native';

import Text from '../reusable/Text';

export default SignUp = ({navigation}) => {
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
                                />
                        </AuthContainer>
                    </Auth>

                    <SignUpContainer>
                        <Text bold center color="#fff">Sign Up</Text>
                    </SignUpContainer>

                    <SignIn onPress={() => navigation.navigate("SignIn")}>
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

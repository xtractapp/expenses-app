import React, { useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { StyleSheet } from 'react-native';

import Constants from '../constants/General';
import UserService from '../services/userService';

import { Button, TextInput, View } from '../components/Themed';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    height: 60,
    margin: 12,
    padding: 10,
    width: '80%',
  },
});

interface LoginProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const Login = ({ setIsAuthenticated }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await UserService.login(email, password);
      const { token } = response.data;
      await SecureStore.setItemAsync(Constants.apiToken, token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
        value={email}
      />
      <TextInput
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
      />
      <Button onPress={handleLogin} style={{ width: '80%' }} title="Log in" />
    </View>
  );
};

export default Login;

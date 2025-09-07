import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Auth } from 'aws-amplify';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = async () => {
    try {
      await Auth.signIn(email, password);
      alert('Logged in!');
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={signIn} />
    </View>
  );
}

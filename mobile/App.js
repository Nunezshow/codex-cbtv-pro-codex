import React from 'react';
import { SafeAreaView } from 'react-native';
import Login from './components/Login';
import Browse from './components/Browse';
import Player from './components/Player';

export default function App() {
  return (
    <SafeAreaView>
      <Login />
      <Browse />
      <Player />
    </SafeAreaView>
  );
}

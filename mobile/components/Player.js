import React from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';

export default function Player() {
  return (
    <View>
      <Video
        source={{ uri: 'https://example.com/sample.mp4' }}
        useNativeControls
        resizeMode="contain"
        style={{ width: 300, height: 200 }}
      />
    </View>
  );
}

import React from 'react';
import { View, Text } from 'react-native';

export default function Browse() {
  const items = [{ id: 1, title: 'Example Movie', year: 2023 }];

  return (
    <View>
      {items.map((i) => (
        <Text key={i.id}>{i.title}</Text>
      ))}
    </View>
  );
}

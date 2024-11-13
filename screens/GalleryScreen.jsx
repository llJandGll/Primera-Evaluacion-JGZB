import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const images = [
  { id: '1', uri: 'https://example.com/security-camera.jpg' },
  { id: '2', uri: 'https://example.com/security-guard.jpg' },
  { id: '3', uri: 'https://example.com/patrol-car.jpg' },
  { id: '4', uri: 'https://example.com/control-room.jpg' },
  { id: '5', uri: 'https://example.com/alarm-system.jpg' },
  { id: '6', uri: 'https://example.com/bodyguard.jpg' },
];

const { width } = Dimensions.get('window');
const itemWidth = width / 2 - 15;

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.image} />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 5,
  },
  image: {
    width: itemWidth,
    height: itemWidth,
    margin: 5,
    borderRadius: 8,
  },
});
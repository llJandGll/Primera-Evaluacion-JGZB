import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export default function ContactScreen() {
  const openMap = () => {
    const latitude = -21.5355; // Coordenadas de ejemplo para Tarija
    const longitude = -64.7293;
    const label = "Empresa de Seguridad Tarija";
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Icon name="location-on" size={30} color="#1E3A8A" />
        <Text style={styles.infoText}>Av. La Paz 123, Tarija, Bolivia</Text>
      </View>
      <View style={styles.infoContainer}>
        <Icon name="phone" size={30} color="#1E3A8A" />
        <Text style={styles.infoText}>+591 4 6645678</Text>
      </View>
      <View style={styles.infoContainer}>
        <Icon name="email" size={30} color="#1E3A8A" />
        <Text style={styles.infoText}>info@seguridadtarija.com</Text>
      </View>
      <TouchableOpacity style={styles.mapButton} onPress={openMap}>
        <Text style={styles.mapButtonText}>Ver en el mapa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#1F2937',
    marginLeft: 10,
  },
  mapButton: {
    backgroundColor: '#1E3A8A',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  mapButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
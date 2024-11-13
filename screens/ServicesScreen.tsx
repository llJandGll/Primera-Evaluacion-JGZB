import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

const services = [
  { id: '1', title: 'Vigilancia Privada', description: 'Protección las 24 horas para su hogar o negocio.', icon: 'security' },
  { id: '2', title: 'Monitoreo', description: 'Sistemas de vigilancia y alarma de última generación.', icon: 'videocam' },
  { id: '3', title: 'Patrullaje', description: 'Rondas de seguridad programadas en su área.', icon: 'directions-car' },
  { id: '4', title: 'Escolta', description: 'Protección personal para ejecutivos y VIPs.', icon: 'person' },
];

const ServiceItem = ({ title, description, icon }) => (
  <View style={styles.serviceItem}>
    <Icon name={icon} size={40} color="#1E3A8A" />
    <Text style={styles.serviceTitle}>{title}</Text>
    <Text style={styles.serviceDescription}>{description}</Text>
  </View>
);

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        renderItem={({ item }) => <ServiceItem {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  serviceItem: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginTop: 10,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
    marginTop: 5,
  },
});
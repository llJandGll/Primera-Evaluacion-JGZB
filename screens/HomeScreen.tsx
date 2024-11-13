import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/security-image.jpg' }}
        style={styles.image}
      />
      <Text style={styles.title}>Empresa de Seguridad Tarija</Text>
      <Text style={styles.subtitle}>Jesus Gabriel Zeballos Baldiviezo</Text>
      <Text style={styles.description}>
        Bienvenido a la Empresa de Seguridad Tarija, tu socio confiable en protección y tranquilidad. 
        Nos comprometemos a brindar servicios de seguridad de alta calidad, utilizando tecnología 
        de punta y personal altamente capacitado para garantizar la seguridad de nuestros clientes.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#4B5563',
    textAlign: 'center',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#1F2937',
    textAlign: 'justify',
    marginHorizontal: 20,
    marginTop: 20,
  },
});
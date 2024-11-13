import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

const testimonials = [
  { id: '1', name: 'Carlos Rodríguez', company: 'Supermercado Central', text: 'Excelente servicio, nos sentimos muy seguros con su vigilancia.' },
  { id: '2', name: 'María López', company: 'Residencial Las Palmas', text: 'El sistema de monitoreo es muy eficiente, estamos muy satisfechos.' },
  { id: '3', name: 'Jorge Sánchez', company: 'Banco Nacional', text: 'Su equipo de escolta es altamente profesional y discreto.' },
];

const TestimonialItem = ({ name, company, text }) => (
  <View style={styles.testimonialItem}>
    <Icon name="format-quote" size={30} color="#1E3A8A" />
    <Text style={styles.testimonialText}>{text}</Text>
    <Text style={styles.testimonialName}>{name}</Text>
    <Text style={styles.testimonialCompany}>{company}</Text>
  </View>
);

export default function TestimonialsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={testimonials}
        renderItem={({ item }) => <TestimonialItem {...item} />}
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
  testimonialItem: {
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
  testimonialText: {
    fontSize: 16,
    color: '#1F2937',
    textAlign: 'center',
    marginVertical: 10,
    fontStyle: 'italic',
  },
  testimonialName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  testimonialCompany: {
    fontSize: 14,
    color: '#4B5563',
  },
});
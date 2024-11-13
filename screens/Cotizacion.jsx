import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CotizacionScreen() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipoServicio, setTipoServicio] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = () => {
    if (!nombre || !email || !telefono || !tipoServicio) {
      Alert.alert('Error', 'Por favor, complete todos los campos obligatorios.');
      return;
    }
    // Aquí iría la lógica para enviar la solicitud de cotización
    Alert.alert('Éxito', 'Su solicitud de cotización ha sido enviada. Nos pondremos en contacto pronto.');
    // Reiniciar los campos después de enviar
    setNombre('');
    setEmail('');
    setTelefono('');
    setTipoServicio('');
    setMensaje('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Solicitar Cotización</Text>
      <Text style={styles.description}>
        Complete el siguiente formulario para recibir una cotización personalizada de nuestros servicios de seguridad.
      </Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nombre Completo *</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Ingrese su nombre completo"
        />
        <Text style={styles.label}>Correo Electrónico *</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Ingrese su correo electrónico"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Teléfono *</Text>
        <TextInput
          style={styles.input}
          value={telefono}
          onChangeText={setTelefono}
          placeholder="Ingrese su número de teléfono"
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>Tipo de Servicio *</Text>
        <Picker
          selectedValue={tipoServicio}
          onValueChange={(itemValue) => setTipoServicio(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Seleccione un servicio" value="" />
          <Picker.Item label="Vigilancia Privada" value="vigilancia" />
          <Picker.Item label="Monitoreo" value="monitoreo" />
          <Picker.Item label="Patrullaje" value="patrullaje" />
          <Picker.Item label="Escolta" value="escolta" />
        </Picker>
        <Text style={styles.label}>Mensaje (Opcional)</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={mensaje}
          onChangeText={setMensaje}
          placeholder="Detalles adicionales sobre su requerimiento"
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Solicitar Cotización</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 20,
  },
  form: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#1E3A8A',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
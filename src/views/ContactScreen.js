import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.info}>📞 Telefone: (11) 1234-5678</Text>
      <Text style={styles.info}>📧 Email: contato@blackskull.com</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Voltar para Início</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131515',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 35,
    color: '#de9e36',
    fontWeight: 'bold',
    marginBottom: 24,
    textShadowColor: '#de9e36',      
    textShadowOffset: { width: 0, height: 0 },   
    textShadowRadius: 10, 
  },
  info: {
    fontSize: 20,
    color: '#ccc',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#de9e36',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 32,
  },
  buttonText: {
    color: '#131515',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactScreen;
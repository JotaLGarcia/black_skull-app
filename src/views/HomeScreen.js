import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Black Skull</Text>
      <Image
        source={{ uri: 'https://media.licdn.com/dms/image/v2/C4D1BAQFh-tX4MZAqjQ/company-background_10000/company-background_10000/0/1583759344402/black_skull_usa_cover?e=2147483647&v=beta&t=_E58mgmkRAAvZXTj6vfz3r4ZH2qu7f_bVTk9C7SpIdI' }}
        style={styles.banner}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products')}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.contactButton]}
        onPress={() => navigation.navigate('Contact')}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Contato</Text>
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

  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#E0B91D',
    marginBottom: 25,
    textShadowColor: '#de9e36',      
    textShadowOffset: { width: 0, height: 0 },   
    textShadowRadius: 10, 
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#E0B91D',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
    width: '60%',
    alignItems: 'center',
    shadowOpacity: 0.3,
  },
  contactButton: {
    backgroundColor: '#777',
  },
  buttonText: {
    color: '#121212',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HomeScreen;
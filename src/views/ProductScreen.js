import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import products from '../models/products';

const ProductScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={
          <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.customButtonText}>Voltar para Início</Text>
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131515',
  },
  listContainer: {
    padding: 16,
    paddingBottom: 48, // espaço extra pro botão
  },
  product: {
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  productImage: {
    width: 160,
    height: 160,
    borderRadius: 12,
    marginBottom: 12,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '400',
    color: '#aaa',
  },
  customButton: {
    backgroundColor: '#de9e36',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
    width: '100%',
  },
  customButtonText: {
    color: '#131515',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductScreen;
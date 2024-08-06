import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>7 MELHORES AÇÕES</Text>
      </View>
      <View style={styles.conteudo}>
        <Image
          source={{
            uri: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iART6gqVCe1E/v0/-1x-1.jpg',
          }}
          style={styles.imagem}
        />
        <Text style={styles.texto}>
          fx213
        </Text>
        <Image
          source={{
            uri: 'https://www.kitano.com.br/wp-content/uploads/2020/07/pizza-de-queijo.jpg',
          }}
          style={styles.imagem}
        />
        <Text style={styles.texto}>
          nrx1f1
        </Text>
        <Image
          source={{
            uri: 'https://www.kitano.com.br/wp-content/uploads/2020/07/torta-de-morango.jpg',
          }}
          style={styles.imagem}
        />
        <Text style={styles.texto}>
          brfnn11
        
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#333',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  conteudo: {
    padding: 20,
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    marginBottom: 20,
  },
});
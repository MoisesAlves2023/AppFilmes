import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from './src/Services/api';
import Filmes from './src/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data)
      console.log(filmes)

      setLoading(false)

    }
    loadFilmes()

  }, [])

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color='black' size={45} />
      </View>)



  }
  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        renderItem={({ item }) => <Filmes data={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from './src/Services/api';
import Filmes from './src/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data)
      console.log(filmes)

    }
    loadFilmes()

  }, [])
  return (
    <View style={styles.container}>
      <FlatList
      data={filmes}
      renderItem={({item})=> <Filmes data={item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})
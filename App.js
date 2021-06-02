import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './src/firebaseConnection';

export default function App() {
  const [nome, setNome] = useState('Carregando...');
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState();

  useEffect(() => {

    async function dados(){
      await firebase.database().ref('usuarios/1').on('value', (snapshot) =>{
        setNome(snapshot.val().nome);
        setIdade(snapshot.val().idade);
        setSexo(snapshot.val().sexo);
      })
    }
    dados();

  }, []);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }} >Olá {nome}!</Text>
      <Text style={{ fontSize: 25 }} >Idade: {idade}</Text>
      <Text style={{ fontSize: 25 }} >Sexo: {sexo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});

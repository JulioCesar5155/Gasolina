import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [valorLitro, setValorLitro] = useState ('')
  const [qtdAbastecimento, setValorAbastecimento] = useState ('')
  const [kmRodados, setValorKm ] = useState ('')
  const [preço, setPreço ] = useState ('')


  const calcularLitro = (litro) => {
    let intLitro = parseInt(valorLitro, 10);
    let intAbastecimento = parseInt(qtdAbastecimento, 10);
    setPreço(intAbastecimento * intLitro);
    Keyboard.dismiss()
  };

  return (
    <View style={styles.container}>
      <Text>Valor do litro</Text>
      <TextInput></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

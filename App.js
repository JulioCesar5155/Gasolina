import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [valorLitro, setValorLitro] = useState ('6.50')
  const [qtdAbastecimento, setValorAbastecimento] = useState ('10')
  const [kmRodados, setValorKm ] = useState ('100')
  const [preco, setPreco ] = useState ('')
  const [resultado, setResultado ] = useState ('')


  const calcularLitro = (litro) => {
    let intLitro = parseInt(valorLitro, 10);
    let intAbastecimento = parseInt(qtdAbastecimento, 10);
    let intKms = parseInt(kmRodados, 10);
    let intPreco = parseInt(preco, 10)
    setPreco(intAbastecimento * intLitro);
    setResultado(intPreco / intKms);
    Keyboard.dismiss()
  };



  return (
    <View style={styles.container}>
      <Text>Valor do litro</Text>
      <TextInput value={valorLitro} onChangeText={setValorLitro}></TextInput>
      <Text>Quantidade abastecida</Text>
      <TextInput value={qtdAbastecimento} onChangeText={setValorAbastecimento}></TextInput>
      <Text>Km rodados</Text>
      <TextInput value={kmRodados} onChangeText={setValorKm}></TextInput>
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

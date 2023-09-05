import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard } from 'react-native';

export default function App() {
  const [valorLitro, setValorLitro] = useState('6.50');
  const [qtdAbastecimento, setValorAbastecimento] = useState('10');
  const [kmRodados, setValorKm] = useState('100');
  const [resultado, setResultado] = useState('');

  const calcularLitro = () => {
    const intLitro = parseFloat(valorLitro);
    const intAbastecimento = parseFloat(qtdAbastecimento);
    const intKms = parseFloat(kmRodados);

    const intPreco = intAbastecimento * intLitro;
    const consumo = intPreco / intKms;
    setResultado(consumo.toFixed(2));
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consumo de Combustível</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor do litro</Text>
        <TextInput
          style={styles.input}
          value={valorLitro}
          onChangeText={setValorLitro}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Quantidade abastecida</Text>
        <TextInput
          style={styles.input}
          value={qtdAbastecimento}
          onChangeText={setValorAbastecimento}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Km rodados</Text>
        <TextInput
          style={styles.input}
          value={kmRodados}
          onChangeText={setValorKm}
          keyboardType='numeric'
        />
      </View>

      <Pressable style={styles.button} onPress={calcularLitro}>
        <Text style={styles.buttonText}>Calcular</Text>
      </Pressable>

      {resultado !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Consumo Médio:</Text>
          <Text style={styles.resultText}>{resultado} R$/KM</Text>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    width: 200,
    height: 50,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 16,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

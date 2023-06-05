/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {getExchangeRates} from '../data/apiCurrency';

const CurrencyBar = () => {
  const [usdRate, setUsdRate] = useState(null);
  const [eurRate, setEurRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      const rates = await getExchangeRates();
      let BrlUsd = (1 / rates.USD).toFixed(2);
      let BrlEur = (1 / rates.EUR).toFixed(2);
      setUsdRate(BrlUsd);
      setEurRate(BrlEur);
    };

    fetchExchangeRates();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.currency}>Dólar (USD): R${usdRate}</Text>
      <Image source={require('../images/LogotTest.png')} style={styles.logo} resizeMode="center" />
      <Text style={styles.currency}>Euro (EUR): R${eurRate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    maxWidth: 750,
    minWidth: 350,
    margin: 20,
    marginTop: 0,
    alignSelf: 'center',
    alignItems: 'center',
    top: 0,
  },
  logo: {
    alignSelf: 'center',
    maxWidth: 250,
    minWidth: 150,
    height: 70,
    borderRadius: 270,
    margin: 20,
  },
  currency: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  },
});

export default CurrencyBar;

import axios from 'axios';

// const API_KEY = 'YOUR_API_KEY';

export const getExchangeRates = async () => {
  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/089ccce17f77207330661188/latest/BRl`
    );

    const { conversion_rates } = response.data;

    return conversion_rates;
  } catch (error) {
    console.log('Erro na chamada da API:', error);
    return {};
  }
};

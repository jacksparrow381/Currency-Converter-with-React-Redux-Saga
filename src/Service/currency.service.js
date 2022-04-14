import axios from "axios";

export const FetchCurrencies = (currencyNames = 'USD') => {
  return axios
    .get(
      `https://v6.exchangerate-api.com/v6/309b675e950e557252b10f8e/latest/${currencyNames}`
    )
    .then((response) => {
      const data = response.data.conversion_rates;
      return data;
    });
};
